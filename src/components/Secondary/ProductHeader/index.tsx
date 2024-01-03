import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GreyArea } from '../GreyArea';
import { Button } from 'react-native-paper';
import { theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';

export const ProductHeader = ({ title }: any) => {
  return (
    <View>
      <GreyArea />
      <View style={[styles.container, globalStyles.rowBetween]}>
        <Text style={styles.title}>{title}</Text>
        <Button
          mode="outlined"
          textColor={theme.colors.primary}
          buttonColor={theme.colors.background}
          onPress={() => console.log('View all')}
        >
          View all
        </Button>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary
  },
  title: {
    color: theme.colors.blackTextCoor,
    fontSize: layout.fontPixel(16),
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
});
