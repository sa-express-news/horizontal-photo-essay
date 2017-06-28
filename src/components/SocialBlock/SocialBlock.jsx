// @flow

import React from 'react';

import Social from '../Social/Social';

import './SocialBlock.css';

export default () => (
  <div className="SocialBlock">
    <Social type='logo' link='http://www.expressnews.com/' />
    <Social type='facebook' link='http://www.expressnews.com/st-anthony-basketball-ticket-to-top/' />
    <Social type='twitter' link='http://www.expressnews.com/st-anthony-basketball-ticket-to-top/' />
    <Social type='reddit' link='http://www.expressnews.com/st-anthony-basketball-ticket-to-top/' />
  </div>
);