import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { GreyArea } from '../GreyArea';
import { Button } from 'react-native-paper';
import { theme } from '@constants';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { usePlatform } from '@hooks';

export const ProductHeader = ({ title }: any) => {
  return (
    <View>
      <GreyArea />
      <View style={[styles.container, globalStyles.rowBetween]}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity>
              <Text style={styles.labelStyle}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    marginHorizontal: usePlatform().isAndroid? 0 : 0 
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
    paddingVertical: layout.pixelSizeVertical(15),
  },
  button: {
    borderRadius: layout.fontPixel(12),
    borderColor: theme.colors.primary,
  },
  labelStyle: {
    fontWeight: '600',
    fontSize: layout.fontPixel(14),
    fontFamily: 'Poppins_400Regular',
    color: theme.colors.primary,
    padding: layout.fontPixel(5),
  },
  buttonWrapper: {
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: layout.fontPixel(6),
    // marginLeft: layout.pixelSizeHorizontal(205),
    position: 'absolute',
    left:  layout.widthPixel(336),
    // right: layout.widthPixel(12),
    // top: layout.heightPixel(12),
    // bottom: layout.heightPixel(12),
  },
});
