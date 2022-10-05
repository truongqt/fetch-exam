import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  MarketSummariesScreenName,
  StackParamList,
} from 'navigation/ScreenProps';
import {scale} from 'utils/helpers/device';
import {colors, fonts, images} from 'assets';

const LoginScreen = () => {
  const distpatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <Image source={images.auth_bg} style={styles.authBg} />
      <Image source={images.auth_logo} style={styles.authLogo} />
      <Text style={styles.title}>Sign in</Text>
      <Button
        title="Test"
        onPress={() => {
          distpatch(
            allActions.auth.loginRequest({
              payload: {
                email: 'emaillll',
                password: 'passsss',
              },
            }),
          );
          navigation.navigate(MarketSummariesScreenName);
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  authBg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    ...StyleSheet.absoluteFillObject,
  },
  authLogo: {
    width: scale(55),
    height: scale(55),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: scale(75),
  },
  title: {
    // fontFamily: fonts.Roboto.bold,
    fontWeight: '400',
    fontSize: scale(22),
    lineHeight: scale(26.4),
    color: colors.white,
  },
});
