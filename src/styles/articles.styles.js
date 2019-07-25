import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  articles: {
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30
  },
  article: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 20
  },
  articleContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 4
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  articlePublishedDate: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  articlePublishedDateText: {
    paddingLeft: 10
  },
  articleActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 10
  }
});