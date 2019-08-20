export default (state = null, action) => {
    switch (action.type) {
        case 'RACE_INFO_DATA_FETCHED':
            return action.payload;
        case 'RACE_INFO_DATA_FETCHED_FAIL':
            return action.payload;
        default:
            return state;
    }
}