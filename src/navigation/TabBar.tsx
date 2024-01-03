import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarComponent from './TabBarComponent';
import { theme } from '@constants';
import { layout } from '@utils';

export const TabBar = ({ state, navigation, descriptors }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBarStyle}>
      <TabBarComponent
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    // backgroundColor: theme.colors.secondary,
    backgroundColor: '#110',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    bottom: 20, // here you can use the bottom inset for more flexbility
    left: 20,
    right: 20,
    height: layout.heightPixel(90),
    flex: 1,
  },
});