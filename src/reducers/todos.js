const uuid = require('react-native-uuid');

export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_DO':
            return [
                ...state,
                {
                    id: uuid.v1(),
                    text: action.payload.text
                }
            ]
        default:
            return state;
    }
}