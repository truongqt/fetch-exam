import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from 'screens/authentication/LoginScreen';
import StartingScreen from 'screens/starting/StartingScreen';
import {
  LoginScreenName,
  MainNavigationName,
  StartingScreenName,
} from './ScreenProps';
import MainNavigation from './stack/MainNavigation';

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
          <Stack.Screen name={MainNavigationName} component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
