// @flow

import React from 'react';

import Social from '../Social/Social';

import './SocialBlock.scss';

export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='//www.expressnews.com/' />
    <Social type='facebook' link='//www.expressnews.com/caught-in-the-opioid-snare-san-antonio/' />
    <Social type='twitter' link='//www.expressnews.com/caught-in-the-opioid-snare-san-antonio/' />
    <Social type='reddit' link='//www.expressnews.com/caught-in-the-opioid-snare-san-antonio/' />
  </div>
); 