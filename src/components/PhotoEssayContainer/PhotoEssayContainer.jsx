// @flow

import React, { Component } from 'react';

// grommet components
import Section from 'grommet/components/Section';

import PhotoEssay from '../PhotoEssay/PhotoEssay';

import './PhotoEssayContainer.scss';

let fadeTimeout = null;

let imgHeight = null; // store these in just this component!!!
let essay = null;
let ticking = false;


class PhotoEssayContainer extends Component {
    props: {
        photos: Array,
        loadPhoto: Function,
        essayId: string,
    }

    state = {
        currPhotoIdx: 0,
        isCaptionOpen: false,
        isTitleVisible: true,
        isEssayVisible: false,
        ticking: false,
        imgHeight: null,
        essay: null,
        positionInViewport: 'above', // options: 'above', 'centered' or 'below'
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMove.bind(this));
        window.addEventListener('touchmove', this.onMove.bind(this));
        window.addEventListener('scroll', this.throttleScroll.bind(this));
    }

    throttleScroll() {
        // avoid event storms. more info here: https://www.html5rocks.com/en/tutorials/speed/animations/
        if (!this.state.ticking) {
            window.requestAnimationFrame(() => {
                this.onMove();
                this.setState({ ticking: false });
            });
        }
        this.setState({ ticking: true });
    }

    componentWillUnmount() {
        ['mousemove', 'scroll', 'touchmove'].forEach(eventType => {
            window.removeEventListener(eventType);
        });
    }

    onMove() {
        this.setPositionInViewport();

        // when the user scrolls or moves their mouse, the image title should be shown
        // further a timeout should be set to hide the title after 1.5 seconds of no movement
        this.handleClearTimeout(); // clear any existing timeouts
        this.setFadeTimeout();
        if (!this.state.isTitleVisible) {
            this.showTitle();
        }
    }

    handleClearTimeout() {
        window.clearTimeout(fadeTimeout);
    }

    setFadeTimeout() {
        fadeTimeout = window.setTimeout(this.hideTitle.bind(this), 1500);
    }

    setPositionInViewport() {
        // this method keeps track of the location of the photo essay in the viewport
        // the location is used to toggle the position of the photos from 'absolute' to fixed
        // and to set the top and bottom properties of the image too
        let positionInViewport = 'centered';
        if ((imgHeight && essay) || this.getEssayDomElements()) { // minimize dom element retrieval
            const essayBbox = essay.getBoundingClientRect();
            if (essayBbox.top > 0) {
                positionInViewport = 'above';
            } else if (essayBbox.bottom < imgHeight) {
                positionInViewport = 'below';
            }

            if (positionInViewport !== this.state.positionInViewport) {
                this.setState({ positionInViewport });
            }
        }
    }

    getEssayDomElements() {
        const imgSelector = `#${this.props.essayId} .full-page-photo.show`;
        const img = document.querySelector(imgSelector);

        if (img) imgHeight = img.height;
        essay = document.getElementById(this.props.essayId);

        return imgHeight !== null && essay !== null;
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
        if ((imgHeight && essay) || this.getEssayDomElements()) {
            return essay.clientHeight - imgHeight;
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
        const { photos, loadPhoto, essayId } = this.props;
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
                    essayId={essayId}
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
