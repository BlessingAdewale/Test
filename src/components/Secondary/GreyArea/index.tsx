import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { layout } from '@utils';

export const GreyArea = () => {
  return <View style={styles.greyArea}></View>;
};

const styles = StyleSheet.create({
  greyArea: {
    backgroundColor: '#F8F8F8',
    height: layout.heightPixel(20),
  },
});
