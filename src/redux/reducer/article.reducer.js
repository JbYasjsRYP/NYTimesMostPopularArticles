import { createReducer } from 'reduxsauce'
import Types from '../types';

export const INITIAL_STATE = { article: {} };

export const setArticle = (state = INITIAL_STATE, action) => {
  return { ...state, article: action.article }
}

export const HANDLERS = {
  [Types.SET_ARTICLE]: setArticle
}

export default createReducer(INITIAL_STATE, HANDLERS);

