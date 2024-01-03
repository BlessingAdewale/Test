import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MainBottomTabParamList } from './types';
import { Home, Orders, Profile, Wallet } from '@screens';
import TabBar from './TabBar';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBar}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Orders" component={Orders} />
      <BottomTab.Screen name="Wallet" component={Wallet} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};
