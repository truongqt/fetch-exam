import {Button, Text} from '@rneui/themed';
import {colors, fonts} from 'assets';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {RootState} from 'redux-manager/rootReducers';
import {device, scale} from 'utils/helpers/device';

const ErrorPopup = () => {
  const dispatch = useDispatch();
  const {errorPopup} = useSelector((state: RootState) => state.common);
  const {t} = useTranslation();

  const hideErrorPopup = () => {
    dispatch(
      allActions.common.setErrorPopup({
        ...errorPopup,
        show: false,
      }),
    );
  };

  return !errorPopup.show ? null : (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.errorTxt}>{errorPopup?.error?.message}</Text>
        <Button title={t("OK")} onPress={hideErrorPopup} buttonStyle={styles.btn} />
      </View>
    </View>
  );
};

export default ErrorPopup;

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
  panel: {
    width: '75%',
    height: '20%',
    backgroundColor: colors.white,
    borderRadius: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTxt: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '400',
    fontSize: scale(15),
    lineHeight: scale(18),
    textAlign: 'center',
    letterSpacing: scale(0.5),
    paddingHorizontal: scale(12),
    color: colors.c3BBA7D
  },
  btn: {
    marginTop: scale(24),
    width: scale(200),
    height: scale(50),
    borderRadius: scale(8),
  },
});
