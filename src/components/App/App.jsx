// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer/StoryTopContainer';
import Sections from '../Sections/Sections';

import Story from '../../story.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
            <Sections sections={Story.sections}/>
          </div>
      </div>
    );
  }
}

export default App;