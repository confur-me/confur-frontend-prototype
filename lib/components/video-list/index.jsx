'use strict';

/**
 * dependencies
 */
import './index.css';
import React from 'react';
import Item from './item';
import store from 'stores/video';
import * as actions from 'actions/video';

export default class Videolist extends React.Component {

  state = {
    conferences: []
  }

  componentDidMount() {
    store.on('change', (data) => {
      this.setState({ conferences: store.get() });
    });
    actions.get();
  }

  render() {
    let conferences = this.state.conferences;
    return (
      <ul className="c-video-list">
        {conferences.map(conference => <pre>{JSON.stringify(conference)}</pre>)}
      </ul>
    );
  }

}
