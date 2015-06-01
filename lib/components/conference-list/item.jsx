'use strict';

/**
 * dependencies
 */
import React from 'react';

export default class VideoItem extends React.Component {

  render() {
    return (
      <li>
        <div className="conference"></div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </li>
    );
  }

}
