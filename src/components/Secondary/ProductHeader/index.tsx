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
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Button
              mode="outlined"
              textColor={theme.colors.primary}
              buttonColor={theme.colors.background}
              style={styles.button}
              onPress={() => console.log('View all')}
              labelStyle={styles.labelStyle}
            >
              View all
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    // height: layout.heightPixel(90),
  },
  title: {
    color: theme.colors.blackTextCoor,
    fontSize: layout.fontPixel(16),
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  contentContainer: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: layout.pixelSizeVertical(15)
  },
  button: {
    borderRadius: layout.fontPixel(12),
    borderColor: theme.colors.primary,
    marginLeft: layout.pixelSizeHorizontal(205)
  
  },
  labelStyle:{
    fontWeight: '600',
    fontSize: layout.fontPixel(14),
    
  }
});
