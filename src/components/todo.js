import React from 'react';

const Todo = ({text, toggle, completed}) => {

    return(
        <li onClick={toggle} style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>{text}</li>
    );
}

export default Todo;