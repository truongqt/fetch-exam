import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from '@rneui/themed';
import {colors, fonts, images} from 'assets';
import {
  MarketSummariesScreenName,
  StackParamList,
} from 'navigation/ScreenProps';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {LoginParams} from 'redux-manager/auth/saga';
import {scale} from 'utils/helpers/device';

const LoginScreen = () => {
  const distpatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [showPassword, setShowPassword] = useState(false);

  const renderEmailInput = () => (
    <View style={[styles.textInputContainer, {marginTop: scale(60)}]}>
      <TextInput
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor={colors.cD6E1FF}
        style={styles.textInput}
      />
      <Image source={images.user_email} style={styles.textInputIcon} />
    </View>
  );

  const renderPasswordInput = () => (
    <View style={[styles.textInputContainer, {marginTop: scale(10)}]}>
      <TextInput
        secureTextEntry={!showPassword}
        placeholder="Password"
        placeholderTextColor={colors.cD6E1FF}
        style={[styles.textInput, {paddingRight: scale(40)}]}
      />
      <Image source={images.user_password} style={styles.textInputIcon} />
      <TouchableOpacity
        style={styles.showPasswordContainer}
        onPress={() => {
          setShowPassword(!showPassword);
        }}>
        <Image source={images.show_password} style={styles.showPasswordIcon} />
      </TouchableOpacity>
    </View>
  );

  const login = async () => {
    const loginData: LoginParams = {
      email: 'tokenize.test@gmail.com',
      password: 'Test#111',
      captcha: 'yWOEjZMIhY',
      captchaBypass: 'yWOEjZMIhY',
    };
    distpatch(
      allActions.auth.loginRequest({
        payload: loginData,
        callBack: ({data, error}) => {
          if (data) {
            navigation.navigate(MarketSummariesScreenName);
          }
        },
      }),
    );
    // navigation.navigate(MarketSummariesScreenName);
    // distpatch(allActions.market.getMarketHeaderRequest());
  };

  return (
    <View style={styles.container}>
      <Image source={images.auth_bg} style={styles.authBg} />
      <Image source={images.auth_logo} style={styles.authLogo} />
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subTitle}>Please sign in to continue</Text>
      {renderEmailInput()}
      {renderPasswordInput()}
      {/* <Button
        title="Test"
        onPress={login}
      /> */}
      <Button title="GOOOO" onPress={login} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
    fontFamily: fonts.Roboto.bold,
    fontWeight: '900',
    fontSize: scale(23),
    lineHeight: scale(30),
    color: colors.white,
    textAlign: 'center',
    marginTop: scale(24),
    letterSpacing: scale(0.5),
  },
  subTitle: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '500',
    fontSize: scale(16),
    lineHeight: scale(24),
    color: colors.cD6DFFF,
    textAlign: 'center',
    marginTop: scale(9),
    letterSpacing: scale(0.3),
  },
  textInputContainer: {
    width: scale(355),
    height: scale(47),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInput: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '500',
    fontSize: scale(15),
    lineHeight: scale(18),
    letterSpacing: scale(0.2),
    color: colors.cD6E1FF,
    borderColor: colors.textInputBorder,
    backgroundColor: colors.textInputBg,
    borderWidth: scale(1.5),
    borderRadius: scale(6),
    width: scale(355),
    height: scale(47),
    paddingLeft: scale(40),
    paddingRight: scale(13),
  },
  textInputIcon: {
    width: scale(17),
    height: scale(19),
    resizeMode: 'contain',
    position: 'absolute',
    left: scale(14),
  },
  showPasswordContainer: {
    position: 'absolute',
    right: scale(17),
  },
  showPasswordIcon: {
    width: scale(19),
    height: scale(13),
    resizeMode: 'contain',
  },
});
