'use strict';

import 'reset.css';
import 'app.css';
import page from 'page';
import React from 'react';
import Search from 'components/search';
import VideoList from 'components/video-list';

/**
 *  Setup the root element to render all react's things into this element
 *  @type {DOMElement}
 */
const root = document.getElementById('root');

page('/', ctx => {
  React.render(
    <div>
      <Search/>
      <VideoList/>
    </div>
  , root);
});

// Start router
page();
