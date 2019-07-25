import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class ArticleDetails extends React.Component {

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
      <View>
        <Text>{article.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({article}) => {
  return { article };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);