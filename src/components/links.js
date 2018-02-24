import React from 'react';
import { set_filter } from '../actions/actions';
import { connect } from 'react-redux';

const Links = ({ setFilter }) => {
    return(
        <div>
            Show <a onClick={() => setFilter('SHOW_COMPLETED')}>Completed</a>
            {' '}<a onClick={() => setFilter('SHOW_INCOMPLETE')}>Incomplete</a>
            {' '}<a onClick={() => setFilter('SHOW_ALL')}>All</a>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: filter => {
            dispatch(set_filter(filter))
        }
    }
}

export default connect(null, mapDispatchToProps)(Links);