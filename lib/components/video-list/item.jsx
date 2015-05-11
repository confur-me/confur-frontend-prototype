'use strict';

/**
 * dependencies
 */
import React from 'react';
import Tag from 'components/video-tag';

export default class VideoItem extends React.Component {

  state = this.props.video;

  componentDidMount() {}

  render() {
    return (
      <li>
        <div className="c-video-item"></div>
        <h3>{this.state.name}</h3>
        <p>{this.state.description}</p>
        <ul className="c-video-tags">
          <li>{this.state.tags.map(tag => <Tag title={tag} />)}</li>
        </ul>
      </li>
    );
  }

}
