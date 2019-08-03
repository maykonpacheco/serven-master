const INITIAL_STATE = {
    title: '',
    value: null
};

export const queries = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_QUERY_TITLE':
            return {
                ...state,
                title: action.payload
            };
        
        case 'SET_QUERY_VALUE':
            return {
                ...state,
                value: action.payload
            };
        
        case 'RESET_QUERY':
            return INITIAL_STATE;
        
        default:
            return state;
    }
};