import {createStackNavigator} from '@react-navigation/stack';
import {MarketSummariesScreenName} from 'navigation/ScreenProps';
import React from 'react';
import MarketSummariesScreen from 'screens/market-summaries/MarketSummariesScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen
        name={MarketSummariesScreenName}
        component={MarketSummariesScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
