import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  // ___New standard___


  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    });
  };

  onImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };

    });
  };


  // ___Conservative method___

  // constructor() {
  //   super();

  //   this.state = {
  //     done: false
  //   };

  //   this.onLabelClick = () => {
  //     console.log(this.props.label);
  //   }
  // }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          onClick={this.onLabelClick}
          className="todo-list-item-label">
          {label}
        </span>

        <button type="button"
          onClick={this.onImportantClick}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          onClick={onDeleted}
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

