import React from 'react';
import { set_filter } from '../actions/actions';
import { connect } from 'react-redux';

const Links = ({ setFilter, filter }) => {
    return(
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className={'nav-link ' + (filter === 'SHOW_COMPLETED' ? 'disabled' : 'active')} href="#" onClick={() => setFilter('SHOW_COMPLETED')}>Completed</a>
                </li>
                <li className="nav-item">
                    <a className={'nav-link ' + (filter === 'SHOW_INCOMPLETE' ? 'disabled' : 'active')} href="#" onClick={() => setFilter('SHOW_INCOMPLETE')}>Incomplete</a>
                </li>
                <li className="nav-item">
                    <a className={'nav-link ' + (filter === 'SHOW_ALL' ? 'disabled' : 'active')} href="#" onClick={() => setFilter('SHOW_ALL')}>All</a>
                </li>
            </ul>
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

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);