// @flow

import React, { Component } from 'react';

// import Article from 'grommet/components/Article';
// import Section from 'grommet/components/Section';
// import Headline from 'grommet/components/Headline';

import VideoPlayer from '../VideoPlayer/VideoPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<VideoPlayer src='http://media.w3.org/2010/05/bunny/movie.mp4' autoPlay={true} muted={true} loop={true} />
      </div>
    );
  }
}

export default App;
