'use strict';

/**
 * Dependencies
 */
import React from 'react';


export default class App extends React.Component {

  state = { text: 'Hello world' }

  componentDidMount() {}

  render() {
    return <p>{this.state.text}</p>;
  }

}
