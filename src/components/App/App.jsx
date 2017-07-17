// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer/StoryTopContainer';
import IntroParagraph from '../IntroParagraph/IntroParagraph';
import AbortionAnnotations from '../AbortionAnnotations/AbortionAnnotations';
import Sections from '../Sections/Sections';
import CostClock from '../CostClock';

import Story from '../../story-short.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
            <IntroParagraph text='Towering above his high school defenders, 6-foot-10 center Charles Bassey took the ball on the right wing of the basket, dribbled, then flung it to the backboard in the playful style of a Harlem Globetrotter.' />
            <AbortionAnnotations/>
            <Sections sections={Story.sections}/>
            <CostClock startDate={new Date('7/17/17')} costPerSecond={.39} title={'Texas special session cost'}/>
          </div>
      </div>
    );
  }
}

export default App;