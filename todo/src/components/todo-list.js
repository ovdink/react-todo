import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul className='list-group'>
            <li className='list-group-item m-1'><TodoListItem
                label='Drink Coffee' /></li>
            <li className='list-group-item m-1'><TodoListItem
                label='Build App'
                important /></li>
        </ul>
    );
};

export default TodoList;