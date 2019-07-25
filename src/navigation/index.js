import { createStackNavigator, createAppContainer } from 'react-navigation';
import Articles from '../containers/articles.container';
import ArticleDetails from '../containers/articleDetails.container';
import routeMaps from './routeMaps';

const MainNavigator = createStackNavigator(
  {
    Articles: { screen: Articles },
    ArticleDetails: { screen: ArticleDetails },
  },
  { 
    initialRouteName: routeMaps.Articles
  }
);

const App = createAppContainer(MainNavigator);

export default App;