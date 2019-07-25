import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { getAllArticlesBySectionAndPeriod } from '../services/article.service';
import { Ionicons } from '@expo/vector-icons';
import routeMaps from '../navigation/routeMaps';
import styles from '../styles/articles.styles';

export default class Articles extends React.Component {

  static navigationOptions = () => {
    const headerTitle = 'NY Times Most Popular Articles';
    const headerTitleStyle = { color: 'white' };
    const headerStyle = { backgroundColor: 'rgb(3, 252, 165)' };
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
    console.log(Object.keys(selectedArticle))
    this.props.navigation.navigate(routeMaps.ArticleDetails);
  }

  render() {
    const { articles } = this.state;
    return (
      <View style={styles.articles}>
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.article}>
              <View style={styles.articleContent}>
                <Text style={styles.articleTitle}>{item.title}</Text>
                
                <View style={styles.articlePublishedDate}>
                  <Ionicons name='ios-calendar' size={20} />
                  <Text style={styles.articlePublishedDateText}>{item.published_date}</Text>
                </View>

              </View>
              <View style={styles.articleActions}>
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