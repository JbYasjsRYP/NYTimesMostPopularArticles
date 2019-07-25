import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { getAllArticlesBySectionAndPeriod } from '../services/article.service';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import routeMaps from '../navigation/routeMaps';
import articleStyles from '../styles/articles.styles';
import appHeaderStyles from '../styles/appHeader.styles';
import articleActions from '../redux/actions/article.actions';

class Articles extends React.Component {

  static navigationOptions = () => {
    const { headerTitleStyle, headerStyle } = appHeaderStyles;
    const headerTitle = 'NY Times Most Popular Articles';
    return { headerTitle, headerTitleStyle, headerStyle };
  }
  
  _isMounted = false;

  state = {
    articles: []
  }

  async componentWillMount() {
    this._isMounted = true;
    const articles = await getAllArticlesBySectionAndPeriod('all-sections', 7);
    this.setState({ articles });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setState(object) {
    if (this._isMounted) {
      super.setState(object);
    }
  }

  navigateToArtileDetails = (selectedArticle) => {
    const { setArticle } = this.props;
    setArticle(selectedArticle);
    this.props.navigation.navigate(routeMaps.ArticleDetails);
  }

  render() {
    const { articles } = this.state;
    return (
      <View style={articleStyles.articles}>
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={articleStyles.article}>
              <View style={articleStyles.articleContent}>
                <Text style={articleStyles.articleTitle}>{item.title}</Text>
                
                <View style={articleStyles.articlePublishedDate}>
                  <Ionicons name='ios-calendar' size={20} />
                  <Text style={articleStyles.articlePublishedDateText}>{item.published_date}</Text>
                </View>

              </View>
              <View style={articleStyles.articleActions}>
                <Ionicons
                  name='ios-arrow-dropright'
                  size={40}
                  onPress={() => this.navigateToArtileDetails(item)} />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    setArticle: (article) => {
      dispatch(articleActions.setArticle(article))
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);