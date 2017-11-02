// @flow

import React from 'react';

import Social from '../Social/Social';

import './SocialBlock.scss';

export default ({ socialURL }) => (
  <div className="SocialBlock">
    <Social type='logo' link='//www.expressnews.com/' />
    <Social type='facebook' link={socialURL} />
    <Social type='twitter' link={socialURL} />
    <Social type='reddit' link={socialURL} />
  </div>
); 