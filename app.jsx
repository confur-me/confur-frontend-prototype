'use strict';

import page from 'page';
import React from 'react';
import Hello from 'components/hello';

const root = document.getElementById('root');

page('/', '/feed');

page('/feed', (ctx, next) => {
  React.render(<Hello />, root);
});

// Start router
page();
