'use strict';

/**
 * dependencies
 */
import React from 'react';


export default class Videolist extends React.Component {

  state = { text: this.constructor.name }

  componentDidMount() {}

  render() {
    return <p>{this.state.text}</p>;
  }

}
