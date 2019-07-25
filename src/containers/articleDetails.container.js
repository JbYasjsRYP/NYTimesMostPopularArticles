import React from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import appHeaderStyles from '../styles/appHeader.styles';
import articleStyles from '../styles/articleDetails.styles';

class ArticleDetails extends React.Component {

  static navigationOptions = () => {
    const { headerTitleStyle, headerStyle } = appHeaderStyles;
    const headerTitle = 'Article Details';
    return { headerTitle, headerTitleStyle, headerStyle };
  }

  _isMounted = false;

  state = {
    article: {}
  }

  componentWillMount() {
    this._isMounted = true;
    const { article } = this.props;
    this.setState({ article });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setState(object) {
    if (this._isMounted) {
      super.setState(object);
    }
  }

  render() {
    const { article } = this.state;
    return (
      <View style={articleStyles.article}>
        <Text style={articleStyles.articleTitle}>{article.title}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(article.url)}>
          <Text style={articleStyles.articleUrl}>
            {article.url}
          </Text>
        </TouchableOpacity>
        <Text>Source: {article.source}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ article }) => {
  return { article };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);