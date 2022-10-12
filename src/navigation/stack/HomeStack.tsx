import {createStackNavigator} from '@react-navigation/stack';
import {MarketsScreenName} from 'navigation/ScreenProps';
import React from 'react';
import MarketsScreen from 'screens/markets/MarketsScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MarketsScreenName} component={MarketsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
