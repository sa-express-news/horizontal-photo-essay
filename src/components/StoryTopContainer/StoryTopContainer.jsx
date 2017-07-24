// @flow

import React, {Component} from 'react';

import StoryTop from '../StoryTop';
import StoryTopDesktop from '../StoryTopDesktop/StoryTopDesktop';
import SocialBlock from '../SocialBlock/SocialBlock';

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
    const isDesktopScreen = window.innerWidth > 1023;
    if (isDesktopScreen !== this.state.isDesktopScreen) {
      this.setState({ isDesktopScreen });
    }
  }

  render(){
    const isDesktopScreen = this.state.isDesktopScreen;
  	return(
      <div>
        <SocialBlock />
  			{isDesktopScreen && <StoryTopDesktop data={this.props.data} />}
        {!isDesktopScreen && <StoryTop data={this.props.data} />}
      </div>
  	)
  }
}

export default StoryTopContainer