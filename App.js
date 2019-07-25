import React from 'react';
import Navigation from './src/navigation';
import store from './src/redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
