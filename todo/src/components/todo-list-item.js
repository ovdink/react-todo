import React from 'react';

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : '#000',
    };

    return <span style={style}>{label}</span>;
}

export default TodoListItem;