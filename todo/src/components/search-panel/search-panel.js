import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    text: ''
  };
  onSearchChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
    this.props.onSearchChange(text);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.text}
        onChange={this.onSearchChange}
      />
    );
  }
}
