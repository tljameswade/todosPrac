import ACTIONS from './index';

export const add_to_do = (text) => {
    // console.log(ACTIONS.ADD_TO_DO);
    return {
        type: ACTIONS.ADD_TO_DO,
        payload: {
            text: text
        }
    }
}