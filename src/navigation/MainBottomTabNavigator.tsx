import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MainBottomTabParamList } from './types';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {
  return (
    <View>
      <Text>MainBottomTabNavigator</Text>
    </View>
  );
};
