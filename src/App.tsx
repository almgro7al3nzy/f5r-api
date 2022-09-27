import React from 'react';
import { Provider } from 'react-redux';
import store from './modules/store';
import MainRouter from './route';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainRouter />
    </Provider>
  );
};

export default App;
