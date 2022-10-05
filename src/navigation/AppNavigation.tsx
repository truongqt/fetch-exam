import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-manager/rootReducers';
import LoginScreen from 'screens/authentication/LoginScreen';
import MarketSummariesScreen from 'screens/market-summaries/MarketSummariesScreen';
import StartingScreen from 'screens/starting/StartingScreen';
import {
  LoginScreenName,
  MarketSummariesScreenName,
  StartingScreenName,
} from './ScreenProps';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name={StartingScreenName} component={StartingScreen} />
          <Stack.Screen name={LoginScreenName} component={LoginScreen} />
          <Stack.Screen
            name={MarketSummariesScreenName}
            component={MarketSummariesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
