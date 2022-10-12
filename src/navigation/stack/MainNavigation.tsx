import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { colors, fonts, images } from 'assets';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { isIos, scale } from 'utils/helpers/device';
import HomeStack from './HomeStack';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = scale(65 + insets.bottom / 2);
  const {t} = useTranslation();

  const renderItem = (image: any, text: string, textColor: string) => (
    <>
      <Image source={image} style={styles.icon} />
      <Text
        style={{
          fontFamily: fonts.Roboto.regular,
          fontWeight: '500',
          fontSize: scale(13),
          lineHeight: scale(15.23),
          color: textColor,
          marginTop: scale(3),
        }}>
        {t(text)}
      </Text>
    </>
  );

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="MarketsTab"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
            height: tabBarHeight,
            backgroundColor: 'white',
            shadowColor: 'black',
            elevation: 20,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            paddingVertical: scale(insets.bottom / 2),
            },
            tabBarHideOnKeyboard: !isIos()
        }}
        >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <>
                    {renderItem(
                      images.home_icon,
                      "Home",
                      colors.c597AF4,
                    )}
                  </>
                ) : (
                  <>
                    {renderItem(
                      images.home_icon,
                      'Home',
                      colors.c9194BB,
                    )}
                  </>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="MarketsTab"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <>
                    {renderItem(
                      images.markets_icon,
                      'Markets',
                      colors.c597AF4,
                    )}
                  </>
                ) : (
                  <>
                    {renderItem(
                      images.markets_icon,
                      'Markets',
                      colors.c9194BB,
                    )}
                  </>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="WalletsTab"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <>
                    {renderItem(
                      images.wallets_icon,
                      'Wallets',
                      colors.c597AF4,
                    )}
                  </>
                ) : (
                  <>
                    {renderItem(
                      images.wallets_icon,
                      'Wallets',
                      colors.c9194BB,
                    )}
                  </>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="PortfolioTab"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <>
                    {renderItem(
                      images.portfolio_icon,
                      'Portfolio',
                      colors.c597AF4,
                    )}
                  </>
                ) : (
                  <>
                    {renderItem(
                      images.portfolio_icon,
                      'Portfolio',
                      colors.c9194BB,
                    )}
                  </>
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="MoreTab"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                {focused ? (
                  <>
                    {renderItem(
                      images.more_icon,
                      'More',
                      colors.c597AF4,
                    )}
                  </>
                ) : (
                  <>
                    {renderItem(
                      images.more_icon,
                      'More',
                      colors.c9194BB,
                    )}
                  </>
                )}
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const MainNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        // animationEnabled: true
        cardStyle: { backgroundColor: 'red' },
      }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: scale(25),
    height: scale(25),
    // padding: scale(10)
    resizeMode: 'contain'
  },
});

export default MainNavigation;
