const uuid = require('react-native-uuid');

export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_DO':
            return [
                ...state,
                {
                    id: uuid.v1(),
                    text: action.payload.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TO_DO':
            return state.map(todo => {
                    if (todo.id.toString() === action.payload.id.toString()) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                });
        default:
            return state;
    }
}