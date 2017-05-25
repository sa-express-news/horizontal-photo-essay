import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article>
          <Section 
            pad='large'
            justify="center"
            align="center"
            colorIndex="grey-1"
            full={true}
          >
            <Headline margin='none'>Booya!!!!</Headline>
          </Section>
        </Article>
      </div>
    );
  }
}

export default App;
