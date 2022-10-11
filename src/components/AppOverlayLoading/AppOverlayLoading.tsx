import {colors} from 'assets';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-manager/rootReducers';
import {device} from 'utils/helpers/device';

const AppOverlayLoading = () => {
  const {showLoading} = useSelector((state: RootState) => state.common);
  return !showLoading ? null : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.white} />
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
    backgroundColor: colors.black_40_percent,
    position: 'absolute',
    top: 0,
  },
});
