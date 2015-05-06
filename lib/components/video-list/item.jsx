'use strict';

/**
 * dependencies
 */
import React from 'react';

export default class VideoItem extends React.Component {

  state = this.props.video;

  componentDidMount() {}

  render() {
    return (
      <li>
        <h3>{this.state.name}</h3>
        <p>{this.state.description}</p>
      </li>
    );
  }

}
