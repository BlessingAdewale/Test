import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { MainBottomTabNavigator } from './MainBottomTabNavigator';

import { Home, ProductDetails } from '@screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="HomeStack" component={MainBottomTabNavigator} />
      <RootStack.Screen name="ProductDetails" component={ProductDetails} />
    </RootStack.Navigator>
  );
};
