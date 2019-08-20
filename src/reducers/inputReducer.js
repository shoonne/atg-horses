
export default (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_INPUT_CHANGED':
            return action.payload;
        default:
            return state;
    }
}