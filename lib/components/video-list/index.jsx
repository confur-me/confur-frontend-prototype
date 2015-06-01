'use strict';

/**
 * dependencies
 */
import React from 'react';
// import Item from './item';
import store from 'stores/videos';
import * as actions from 'actions/videos';

export default class VideoList extends React.Component {

  state = { videos: [] }

  componentDidMount() {
    store.on('change', data => {
      const videos = store.get();
      this.setState({ videos });
    });
    actions.getPage(this.props.page || 1);
  }

  render() {
    const videos = this.state.videos;
    return (
      <div>
        {videos.map((video, key) => <pre key={key}>{JSON.stringify(video)}</pre>)}
      </div>
    );
  }

}


