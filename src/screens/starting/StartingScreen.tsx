import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DEFAULT_HEADERS} from 'apisauce';
import {
  LoginScreenName,
  MarketSummariesScreenName,
  StackParamList,
} from 'navigation/ScreenProps';
import React, {useEffect} from 'react';
import {Platform, View} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import {ProfileModel} from 'redux-manager/auth/reducer';
import {SAVED_USER_PROFILE} from 'utils/helpers/constants';
import storage from 'utils/helpers/storage';
import {apisauces} from 'utils/services/apis';

const StartingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  useEffect(() => {
    const checkAccessToken = async () => {
      const deviceId = await getUniqueId();
      apisauces.setHeaders({
        ...DEFAULT_HEADERS,
        'User-Agent': Platform.OS,
        'TOK-DEVICE-ID': deviceId,
      });
      const userProfile: ProfileModel = await storage.load(SAVED_USER_PROFILE);
      if (userProfile?.token) {
        apisauces.setHeader('Authorization', 'Bearer ' + userProfile?.token);
        navigation.dispatch(
          CommonActions.reset({
            routes: [{name: MarketSummariesScreenName}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            routes: [{name: LoginScreenName}],
          }),
        );
      }
    };

    checkAccessToken();
  }, []);

  return <View />;
};

export default StartingScreen;
