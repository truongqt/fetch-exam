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
import AppNavigation from 'navigation/AppNavigation';
import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import rootStore from 'redux-manager/rootStore';

const App = () => {
  return (
    <Provider store={rootStore}>
      <AppNavigation />
      <AppOverlayLoading />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
