/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import AppOverlayLoading from 'components/AppOverlayLoading/AppOverlayLoading';
import ErrorPopup from 'components/ErrorPopup/ErrorPopup';
import AppNavigation from 'navigation/AppNavigation';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import rootStore from 'redux-manager/rootStore';

LogBox.ignoreLogs(['Looks like ']);

const App = () => {
  return (
    <Provider store={rootStore}>
      <AppNavigation />
      <ErrorPopup />
      <AppOverlayLoading />
    </Provider>
  );
};

export default App;
