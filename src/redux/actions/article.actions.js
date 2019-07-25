import { createActions } from 'reduxsauce'

const actions = createActions({
  setArticle: ['article']
}, {});

export const Types = actions.Types;
export default actions.Creators;