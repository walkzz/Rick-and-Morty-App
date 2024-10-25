import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { charactersReducer, characterDetailsReducer } from './reducers';

const rootReducer = combineReducers({
  characters: charactersReducer,
  characterDetails: characterDetailsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))