import React from 'react';

const Todo = ({text, toggle, completed}) => {

    return(
        <li className="list-group-item justify-content-center" onClick={toggle}>
        {getIcon(completed)}<span>&nbsp;</span>{text}</li>
    );
}

const getIcon = completed => {
    return completed ? <span className="octicon octicon-check"></span> : null
}

export default Todo;