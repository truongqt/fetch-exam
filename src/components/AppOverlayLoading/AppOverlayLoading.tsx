import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-manager/rootReducers';
import {device} from 'utils/helpers/device';

const AppOverlayLoading = () => {
  const {showLoading} = useSelector((state: RootState) => state.common);
  return !showLoading ? null : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default AppOverlayLoading;

const styles = StyleSheet.create({
  container: {
    height: device.height,
    width: device.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
  },
});
