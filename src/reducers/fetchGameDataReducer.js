export default (state = null, action) => {
    switch (action.type) {
        case 'GAME_TYPE_DATA_FETCHED':
            return action.payload;
        case 'GAME_TYPE_DATA_FETCHED_FAIL':
            return action.payload;
        default:
            return state;
    }
}