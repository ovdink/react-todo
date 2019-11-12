import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onItemAdded } = this.props;

    return (
      <div className="item-add-form btn-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="add a name"
        ></input>
        <button
          type="button"
          onClick={() => onItemAdded("test")}
          className="btn btn-success"
        >
          Add
        </button>
      </div>
    );
  }
}
