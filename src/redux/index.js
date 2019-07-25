import { createStore } from 'redux';
import articleReducer from './reducer/article.reducer';

export default createStore(articleReducer);
