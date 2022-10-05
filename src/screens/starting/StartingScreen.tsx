import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DEFAULT_HEADERS} from 'apisauce';
import {
  LoginScreenName,
  MarketSummariesScreenName,
  StackParamList,
} from 'navigation/ScreenProps';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Profile} from 'redux-manager/auth/reducer';
import {SAVED_USER_PROFILE} from 'utils/helpers/constants';
import storage from 'utils/helpers/storage';
import {api} from 'utils/services/apis';

const StartingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  console.log('StartingScreen....')

  useEffect(() => {
    const checkAccessToken = async () => {
      const userProfile: Profile = await storage.load(SAVED_USER_PROFILE);
      console.log({userProfile})
      if (userProfile?.token) {
        console.log(11111)
        api.setHeaders({
          ...DEFAULT_HEADERS,
          Authorization: 'Bearer ' + userProfile?.token,
        });
        navigation.dispatch(
          CommonActions.reset({
            routes: [{name: MarketSummariesScreenName}],
          }),
        );
      } else {
        console.log(22222)
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
