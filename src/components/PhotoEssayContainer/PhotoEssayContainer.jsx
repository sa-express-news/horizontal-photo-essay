import React, { Component } from 'react';

// grommet components
import Section from 'grommet/components/Section';

import PhotoEssay from '../PhotoEssay/PhotoEssay';

import './PhotoEssayContainer.scss';

let essayId = 0; // will be incremented with each new instance

class PhotoEssayContainer extends Component {
    props: {
        photos: Array,
        loadPhoto: Function,
    }

    state: {
        currPhotoIdx: number,
        isCaptionOpen: boolean,
        isTitleVisible: boolean,
        isEssayVisible: boolean,
        positionInViewport: string, // options: 'above', 'centered' or 'below'
    }

    constructor(props) {
        super(props);

        this.state = {
            currPhotoIdx: 0,
            isCaptionOpen: false,
            isTitleVisible: true,
            isEssayVisible: false,
            positionInViewport: 'above',
        };

        this.essay = null; // the element child component we'll need to keep track of in the DOM
        this.lastScroll = 0 // used to throttle calls to getBoundingClientRect
        this.imgHeight = 0; // the height of our images in the photo essay, will be calculated via viewport/aspect ratio
        this.fadeCaptionTimeout = null; // setTimeout returned val
        this.animationTicking = false; // used to throttle scroll events
        this.photoEssayId = this.setEssayId(); // unique identifier
    }

    setEssayId() {
        essayId += 1;
        return `essay-${essayId}`;
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.setTitleVisibility.bind(this));
        window.addEventListener('touchmove', this.setTitleVisibility.bind(this));
        window.addEventListener('scroll', this.throttleScroll.bind(this));
    }

    componentWillUnmount() {
        ['mousemove', 'scroll', 'touchmove'].forEach(eventType => {
            window.removeEventListener(eventType);
        });
    }

    throttleScroll() {
        // avoid event storms. more info here: https://www.html5rocks.com/en/tutorials/speed/animations/
        if (!this.animationTicking) {
            window.requestAnimationFrame(() => {
                if (this.shouldCheckPositionInViewport()) {
                    this.setPositionInViewport();
                }
                this.setTitleVisibility();
                this.animationTicking = false;
            });
        }
        this.animationTicking = true;
    }

    shouldCheckPositionInViewport() {
        // this function checks to see if scroll is heading away, toward or is centered on essay
        // if we're scrolling toward the essay or are centered on it, it runs return true
        const { positionInViewport } = this.state;
        let should = false;

        if (positionInViewport === 'centered') {
            should = true;
        }
        else if (positionInViewport === 'above') {
            should = window.scrollY > this.lastScroll;
        }
        else {
            should = window.scrollY < this.lastScroll;
        }
        this.lastScroll = window.scrollY;
        return should;
    }

    setTitleVisibility() {
        // when the user scrolls or moves their mouse, the image title should be shown
        // further a timeout should be set to hide the title after 1.5 seconds of no movement
        this.handleClearTimeout(); // clear any existing timeouts
        this.setFadeTimeout();
        if (!this.state.isTitleVisible) {
            this.showTitle();
        }
    }

    handleClearTimeout() {
        window.clearTimeout(this.fadeCaptionTimeout);
    }

    setFadeTimeout() {
        this.fadeCaptionTimeout = window.setTimeout(this.hideTitle.bind(this), 1500);
    }

    setPositionInViewport() {
        // this method keeps track of the location of the photo essay in the viewport
        // the location is used to toggle the position of the photos from 'absolute' to fixed
        // and to set the top property of the image
        let positionInViewport = 'centered';
        if ((this.imgHeight || this.setImgHeight()) && (this.essay || this.setEssay())) { // minimize dom element retrieval
            const essayBbox = this.essay.getBoundingClientRect();
            if (essayBbox.top > 0) {
                positionInViewport = 'above';
            } else if (essayBbox.bottom < this.imgHeight) {
                positionInViewport = 'below';
            }

            if (positionInViewport !== this.state.positionInViewport) {
                this.setState({ positionInViewport });
            }
        }
    }

    setEssay() {
        this.essay = document.getElementById(this.photoEssayId);
        return this.essay !== null;
    }

    setImgHeight() {
        const img = document.querySelector(`#${this.photoEssayId} .full-page-photo.show`);
        if (img) this.imgHeight = img.height;
        return this.imgHeight !== 0
    }

    getStylesBasedOnPositionInViewport() {
        const { positionInViewport } = this.state;
        switch(positionInViewport) {
            case 'above':
                return {
                    top: 0,
                    position: 'absolute',
                };
            case 'centered':
                return {
                    top: 0,
                    position: 'fixed',
                };
            case 'below':
                return {
                    top: this.getLastPhotoPosition(),
                    position: 'absolute',
                };
            default:
                return {};
        }
    }

    getLastPhotoPosition() {
        if ((this.imgHeight || this.setImgHeight()) && (this.essay || this.setEssay())) { // minimize dom element retrieval
            return this.essay.clientHeight - this.imgHeight;
        }
    }

    showTitle() {
        this.setState({ isTitleVisible: true });
    }

    hideTitle() {
        this.setState({ isTitleVisible: false });
    }

    setGlobalClickHandle() {
        // if the caption is open, clicking anywhere on page should close it.
        const { isCaptionOpen } = this.state;
        return isCaptionOpen ? this.closeCaption.bind(this) : null;
    }

    closeCaption() {
        this.setState({ isCaptionOpen: false });
    }

    openCaption() {
        this.setState({ isCaptionOpen: true });
    }

    setCaptionOptions(photo: Object) {
        const { isCaptionOpen } = this.state;
        return {
            wrapClass: isCaptionOpen ? 'text-background-opaque' : 'text-background',
            descriptionText: isCaptionOpen ? photo.caption : 'Read More',
            descriptionClass: isCaptionOpen ? 'caption' : 'read-more',
            descriptionHandle: isCaptionOpen ? null : this.openCaption.bind(this),
        };
    } 

    isCurrPhoto(idx: number) {
        return idx === this.state.currPhotoIdx;
    }

    updateCurrPhoto(currPhotoIdx: number, isVisible: bool) {
        if (isVisible && currPhotoIdx !== this.state.currPhotoIdx) {
            this.setState({ currPhotoIdx });
        }
    }

    getEssayClass() {
        const { isTitleVisible, isCaptionOpen } = this.state;
        return isTitleVisible || isCaptionOpen ? 'essay' : 'essay hide';
    }

    render() {
        const { photos, loadPhoto } = this.props;
        return (
            <Section
                pad="none"
                justify="center"
                align="center"
                colorIndex="grey-1"
                full="horizontal"
                className="PhotoEssayContainer"
                onClick={this.setGlobalClickHandle()}
            >
                <PhotoEssay 
                    photos={photos}
                    loadPhoto={loadPhoto}
                    essayId={this.photoEssayId}
                    getStylesBasedOnPositionInViewport={(...args) => this.getStylesBasedOnPositionInViewport(...args)}
                    isCurrPhoto={(...args) => this.isCurrPhoto(...args)}
                    updateCurrPhoto={(...args) => this.updateCurrPhoto(...args)}
                    setCaptionOptions={(...args) => this.setCaptionOptions(...args)}
                    getEssayClass={(...args) => this.getEssayClass(...args)}
                />
            </Section>
        );
    }
}

export default PhotoEssayContainer;
