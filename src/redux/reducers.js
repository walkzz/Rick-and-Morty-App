const initialState = {
    characters: [],
    loading: false,
    error: null,
};
export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_CHARACTERS_SUCCESS':
            return { ...state, loading: false, characters: action.payload };
        case 'FETCH_CHARACTERS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
export const characterDetailsReducer = (state = { character: {}, loading: false }, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTER_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_CHARACTER_DETAILS_SUCCESS':
            return { ...state, loading: false, character: action.payload };
        case 'FETCH_CHARACTER_DETAILS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};