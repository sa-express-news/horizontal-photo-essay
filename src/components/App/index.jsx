// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer';
import Sections from '../Sections';
import SubscribeFooter from '../SubscribeFooter';

import Story from '../../story.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
            <Sections sections={Story.sections}/>
            <SubscribeFooter link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000'/>
          </div>
      </div>
    );
  }
}

export default App;