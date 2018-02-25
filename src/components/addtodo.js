import React from 'react';
import { connect } from 'react-redux';
import { add_to_do } from '../actions/actions';

const Addtodo = ({addtodo}) => {
    let inputVal;

    return (
        <div style={{margin: "5px 5px 5px 5px"}}>
            <form className="form-inline justify-content-center" onSubmit={ e => {
                e.preventDefault();
                if (!inputVal.value) {
                    return;
                }
                addtodo(inputVal.value);
                inputVal.value = '';
            }}>
                <div className="form-group mb-2">
                    <label htmlFor="addtodo" className="sr-only">New To Do</label>
                    <input type="text" className="form-control" id="addtodo" placeholder="A New Task" 
                        ref={node => inputVal = node} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add a new todo task</button>
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