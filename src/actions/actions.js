import ACTIONS from './index';

export const toggle_to_do = (id) => {
    return {
        type: ACTIONS.TOGGLE_TO_DO,
        payload: {
            id: id
        }
    }
}

export const add_to_do = (text) => {
    return {
        type: ACTIONS.ADD_TO_DO,
        payload: {
            text: text
        }
    }
}

export const set_filter = (filter) => {
    return {
        type: ACTIONS.SET_FILTER,
        payload: {
            filter: filter
        }
    }
}
