import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, CheckBox, Text} from '@rneui/themed';
import {colors, fonts, images} from 'assets';
import {useShowLoading} from 'hooks/useShowLoading';
import {MainNavigationName, StackParamList} from 'navigation/ScreenProps';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {LoginSuccessModel} from 'redux-manager/auth/action';
import {LoginParams} from 'redux-manager/auth/saga';
import {RootState} from 'redux-manager/rootReducers';
import {SAVED_USER_PROFILE} from 'utils/helpers/constants';
import {scale} from 'utils/helpers/device';
import {validateEmail} from 'utils/helpers/functions';
import storage from 'utils/helpers/storage';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {isRequesting} = useSelector((state: RootState) => state.auth);
  useShowLoading(!!isRequesting);
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {t} = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  const loginDataTest: LoginParams = {
    email: 'tokenize.test@gmail.com',
    password: 'Test#111',
    captcha: 'yWOEjZMIhY',
    captchaBypass: 'yWOEjZMIhY',
  };

  const [loginInputData, setLoginInputData] =
    useState<LoginParams>(loginDataTest);

  const validateLoginData = () => {
    if (!validateEmail(loginInputData.email)) {
      dispatch(
        allActions.common.setErrorPopup({
          show: true,
          error: {
            message: t('Please provide valid email address.'),
          },
        }),
      );
      return false;
    }
    if (!loginInputData.password) {
      dispatch(
        allActions.common.setErrorPopup({
          show: true,
          error: {
            message: t('Please provide password.'),
          },
        }),
      );
      return false;
    }
    return true;
  };

  const login = async () => {
    if (!validateLoginData()) return;
    const loginData: LoginParams = {
      ...loginInputData,
    };
    dispatch(
      allActions.auth.loginRequest({
        payload: loginData,
        callBack: async ({data, error}) => {
          if (data) {
            const response = data as LoginSuccessModel;
            if (isRememberMe) {
              await storage.save(SAVED_USER_PROFILE, response.data);
            }
            navigation.navigate(MainNavigationName);
          }
          if (error) {
            dispatch(
              allActions.common.setErrorPopup({
                show: true,
                error: error,
              }),
            );
          }
        },
      }),
    );
  };

  const renderEmailInput = () => (
    <View style={[styles.textInputContainer, {marginTop: scale(60)}]}>
      <TextInput
        keyboardType="email-address"
        placeholder={t('Email')}
        placeholderTextColor={colors.cD6E1FF}
        style={styles.textInput}
        onChangeText={text =>
          setLoginInputData({
            ...loginInputData,
            email: text.toString(),
          })
        }
      />
      <Image source={images.user_email} style={styles.textInputIcon} />
    </View>
  );

  const renderPasswordInput = () => (
    <View style={[styles.textInputContainer, {marginTop: scale(10)}]}>
      <TextInput
        secureTextEntry={!showPassword}
        placeholder={t('Password')}
        placeholderTextColor={colors.cD6E1FF}
        style={[styles.textInput, {paddingRight: scale(40)}]}
        onChangeText={text =>
          setLoginInputData({
            ...loginInputData,
            password: text.toString(),
          })
        }
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

  const renderRememberMe = () => (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: scale(8),
        paddingHorizontal: scale(10),
        height: scale(50),
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CheckBox
          title={t('Remember me')}
          textStyle={styles.checkBoxTitle}
          checked={isRememberMe}
          containerStyle={styles.checkBox}
          checkedColor={colors.white}
          onPress={() => setIsRememberMe(!isRememberMe)}
        />
      </View>
      <Text style={styles.checkBoxTitle} onPress={() => {}}>
        {t('Forgot your password?')}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={images.auth_bg} style={styles.authBg} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Image source={images.auth_logo} style={styles.authLogo} />
        <Text style={styles.title}>{t('Sign in')}</Text>
        <Text style={styles.subTitle}>{t('Please sign in to continue')}</Text>
        {renderEmailInput()}
        {renderPasswordInput()}
        {renderRememberMe()}
        <Button
          title={t('SIGN IN')}
          onPress={login}
          containerStyle={{
            marginTop: scale(90),
          }}
          buttonStyle={{
            marginHorizontal: scale(10),
            backgroundColor: colors.cBDCFFF,
            height: scale(45),
            borderRadius: scale(6),
            shadowColor: colors.signInBtnShadow,
            elevation: 20,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          }}
          titleStyle={styles.signInTxt}
        />
        <Text style={styles.dontHaveAccountTxt}>
          {t('Don???t have an account yet?')}
          <Text style={styles.signUpTxt} onPress={() => {}}>
            {` `}
            {t('SIGN UP')}
          </Text>
        </Text>
      </KeyboardAwareScrollView>
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
  checkBox: {
    backgroundColor: 'transparent',
    padding: 5,
    marginLeft: 0,
    marginRight: scale(8),
  },
  checkBoxTitle: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '500',
    fontSize: scale(14),
    lineHeight: scale(21),
    color: colors.white,
  },
  signInTxt: {
    fontFamily: fonts.Roboto.bold,
    fontWeight: '700',
    fontSize: scale(14),
    lineHeight: scale(16),
    letterSpacing: scale(0.5),
    color: colors.c5073F2,
  },
  dontHaveAccountTxt: {
    fontFamily: fonts.Roboto.bold,
    fontWeight: '700',
    fontSize: scale(14),
    lineHeight: scale(24),
    color: colors.white,
    textAlign: 'center',
    marginTop: scale(20),
  },
  signUpTxt: {
    fontFamily: fonts.Roboto.bold,
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(24),
    color: colors.white,
  },
});
