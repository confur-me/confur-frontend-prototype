'use strict';

/**
 * Dependencies
 */
import React from 'react';
import autobind from 'autobind-decorator';


export default class Search extends React.Component {

  state = {
    query: ""
  }

  componentDidMount() {}

  @autobind
  search() {
    console.log(this.state.query);
  }

  @autobind
  updateQuery({target}) {
    this.setState({ query: target.value });
  }

  render() {
    return (
      <div className="c-search">
        <input type="search" placeholder="Поиск" onChange={this.updateQuery} />
        <button onClick={this.search}>Найти</button>
      </div>
    );
  }

}
