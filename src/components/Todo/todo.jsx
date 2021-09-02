import React from 'react';

const Todo = ({ onClick, completed, text }) => (
    <li
    onClick = {onClick}
    style = {{
        textDecoration: completed ? 'line-through':'none'
    }}
    > {/* li ichinde text kelip atat */}
        {text}
    </li>
)
export default Todo;