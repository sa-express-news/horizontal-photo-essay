// @flow

import React, { Component } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

import Section from 'grommet/components/Section';

import PhotoEssay from '../PhotoEssay/PhotoEssay';

import './PhotoEssayContainer.scss';

let fadeTimeout = null;


class PhotoEssayContainer extends Component {
    props: {
        photos: array,
        loadPhoto: func,
    }

    state = {
        currPhotoIdx: 0,
        isCaptionOpen: false,
        isTitleVisible: true,
    }

    componentDidMount() {
        const onMove = this.onMove.bind(this);
        ['mousemove', 'scroll', 'touchmove'].forEach(eventType => {
            window.addEventListener(eventType, onMove);
        });
    }

    componentWillUnmount() {
        const onMove = this.onMove.bind(this);
        ['mousemove', 'scroll', 'touchmove'].forEach(eventType => {
            window.removeEventListener(eventType, onMove);
        });
    }

    onMove() {
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

    showTitle() {
        this.setState({ isTitleVisible: true });
    }

    hideTitle() {
        this.setState({ isTitleVisible: false });
    }

    setGlobalClickHandle() {
        // if the caption is open, clicking anywhere on page should close it.
        const { isCaptionOpen } = this.state;
        return isCaptionOpen ? this.closeCaption : null;
    }

    closeCaption() {
        this.setState({ isCaptionOpen: false });
    }

    openCaption() {
        this.setState({ isCaptionOpen: true });
    }

    setCaptionOptions(photo: object) {
        const { isCaptionOpen } = this.state;
        return {
            wrapClass: isCaptionOpen ? 'text-background-opaque' : 'text-background',
            descriptionText: isCaptionOpen ? photo.caption : 'Read More',
            descriptionClass: isCaptionOpen ? 'caption' : 'read-more',
            descriptionHandle: isCaptionOpen ? null : this.openCaption,
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

    togglePhotoEssay(isVisible) {
        console.log(isVisible);
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
                    isCurrPhoto={(...args) => this.isCurrPhoto(...args)}
                    updateCurrPhoto={(...args) => this.updateCurrPhoto(...args)}
                    setCaptionOptions={(...args) => this.setCaptionOptions(...args)}
                    openCaption={(...args) => this.openCaption(...args)}
                    getEssayClass={(...args) => this.getEssayClass(...args)}
                />
            </Section>
        );
    }
}

export default PhotoEssayContainer;
