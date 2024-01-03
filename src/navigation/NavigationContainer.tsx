import React from 'react';

import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './RootStackNavigator';

export const NavigationContainer = () => {
  return (
    <BaseNavigationContainer>
      <RootStackNavigator />
    </BaseNavigationContainer>
  );
};
