'use strict';

/**
 * dependencies
 */
import './index.css';
import React from 'react';
import Item from './item';
import store from 'stores/conferences';
import * as actions from 'actions/conferences';

export default class ConferenceList extends React.Component {

  state = { conferences: [] }

  componentDidMount() {
    store.on('change', data => {
      const conferences = store.get();
      this.setState({ conferences });
    });
    actions.get();
  }

  render() {
    const conferences = this.state.conferences;
    return (
      <ul className="conference-list">
        {conferences.map((conference, key) => <Item {...conference} key={key} />)}
      </ul>
    );
  }

}


