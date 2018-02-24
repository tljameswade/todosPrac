import React from 'react';
import Todo from './todo';
import { connect } from 'react-redux';
import { toggle_to_do } from '../actions/actions';

const Todos = ({ todos, toggle }) => {
    return(
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} text={todo.text} completed={todo.completed} toggle={() => toggle(todo.id)}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    switch(state.filter) {
        case 'SHOW_COMPLETED':
            return {
                todos: state.todos.filter(todo => todo.completed)
            }
        case 'SHOW_INCOMPLETE':
            return {
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return {
                todos: state.todos
            }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: id => {
            dispatch(toggle_to_do(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);