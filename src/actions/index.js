

export const onSearchInputChange = (text) => {
    return {
        type: 'SEARCH_INPUT_CHANGED',
        payload: text
    };
};

export const gameTypeDataFetched = (response) => {
    return {
        type: 'GAME_TYPE_DATA_FETCHED',
        payload: response
    };
};

export const fetchGameData = (text) => {
    return async (dispatch) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    await fetch(proxyurl + text) 
    .then(response => response.json())
    .then(contents => dispatch({type:'GAME_TYPE_DATA_FETCHED', payload: contents}))
    .catch(() => dispatch({type: 'GAME_TYPE_DATA_FETCHED_FAIL', payload: []}))
    }

} 

export const getRaceInformation = text => {
    return async (dispatch) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        await fetch(proxyurl + text) 
        .then(response => response.json())
        .then(contents => dispatch({type:'RACE_INFO_DATA_FETCHED', payload: contents}))
        .catch(() => dispatch({type: 'RACE_INFO_DATA_FETCHED_FAIL', payload: []}))
        }
}

