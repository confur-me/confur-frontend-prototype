'use strict';

/**
 * Dependencies
 */
import React from 'react';


export default class VideoList extends React.Component {

  state = { text: this.constructor.name }

  componentDidMount() {}

  render() {
    return <p>{this.state.text}</p>;
  }

}
