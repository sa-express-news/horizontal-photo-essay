// @flow

import React, {Component} from 'react';

import StoryTop from '../StoryTop';
import StoryTopDesktop from '../StoryTopDesktop';
import SocialBlock from '../SocialBlock';

class StoryTopContainer extends Component{
	props: {
		data: Object
	};

	state = {
		isDesktopScreen: false
  };

  componentDidMount(){
  	this.setIsDesktop();
    window.addEventListener('resize', this.setIsDesktop);
 	}

  setIsDesktop = () => {
    //We check height because iPad Pros are 1024x1366, and our desktop story top looks awful on them.
    const isDesktopScreen = window.innerWidth > 1023 && window.innerHeight !== 1366;
    if (isDesktopScreen !== this.state.isDesktopScreen) {
      this.setState({ isDesktopScreen });
    }
  }

  render(){
    const isDesktopScreen = this.state.isDesktopScreen;
  	return(
      <div>
  			{isDesktopScreen && <StoryTopDesktop data={this.props.data} />}
        {!isDesktopScreen && <StoryTop data={this.props.data} />}
        <SocialBlock />
      </div>
  	)
  }
}

export default StoryTopContainer