import React from 'react';
import Todo from './todo';
import { connect } from 'react-redux';

const Todos = (todos) => {
    return(
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} text={todo.text} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, null)(Todos);