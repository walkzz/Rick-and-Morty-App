export const fetchCharacters = () => async dispatch => {
    dispatch({ type: 'FETCH_CHARACTERS_REQUEST' });
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: data.results });
    } catch (error) {
        dispatch({ type: 'FETCH_CHARACTERS_FAILURE', payload: error });
    }
};
export const fetchCharacterDetails = (id) => async dispatch => {
    dispatch({ type: 'FETCH_CHARACTER_DETAILS_REQUEST' });
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        dispatch({ type: 'FETCH_CHARACTER_DETAILS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_CHARACTER_DETAILS_FAILURE', payload: error });
    }
};
export const addToFavorites = (character) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(character);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};
export const removeFromFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(character => character.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};