'use strict';

/**
 * Dependencies
 */
import './index.css';
import React from 'react';

export default class VideoTag extends React.Component {

  render() {
    return <div className="c-video-tag">{this.props.title}</div>;
  }

}
