import React from 'react';
import { connect } from 'react-redux';
import { add_to_do } from '../actions/actions';

const Addtodo = ({addtodo}) => {
    let inputVal;

    return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault();
                if (!inputVal.value) {
                    return;
                }
                addtodo(inputVal.value);
                inputVal.value = '';
            }}>
            <input type="text" ref={node => inputVal = node} />
            <input type="submit" value="Add a new todo" />
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addtodo: (text) => {
            dispatch(add_to_do(text));
        }
    }
}

export default connect(null, mapDispatchToProps)(Addtodo);