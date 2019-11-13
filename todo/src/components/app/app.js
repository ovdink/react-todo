import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Make App')
    ],
    text: '',
    filter: 'all' // all, done, active
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: +String(Math.random())
        .split('.')[1]
        .substring(0, 12)
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  importantItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  doneItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchChange = (text) => {
    this.setState({ text });
  };

  search = (arr, text) => {
    if (text.length === 0) return arr;
    return arr.filter((item) => {
      return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(arr, filter) {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((item) => !item.done);
      case 'done':
        return arr.filter((item) => item.done);
      default:
        return arr;
    }
  }

  render() {
    const { todoData, text, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, text), filter);

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.importantItem}
          onToggleDone={this.doneItem}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
