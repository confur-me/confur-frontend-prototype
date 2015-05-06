'use strict';

/**
 * dependencies
 */
import React from 'react';
import Item from './item';

export default class Videolist extends React.Component {

  state = {
    videos: [
      {
        name: 'Hello World the Movie',
        description: 'Yay, just description'
      }
    ]
  }

  componentDidMount() {}

  render() {
    return (
      <ul className="c-video-list">
        {this.state.videos.map(video => <Item video={video} />)}
      </ul>
    );
  }

}
