import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Animated, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Pagination = ({ data, scrollX }: any) => {
  return (
    <View style={styles.container}>
      {data.map((item: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 20, 12],
          extrapolate: 'clamp',
        });
        return <Animated.View key={idx} style={[styles.dot, { width: dotWidth }]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: layout.heightPixel(330),
    // right: layout.widthPixel(12),
    // left: layout.widthPixel(151),
    // top: layout.heightPixel(0)
  },

  dot: {
    width: layout.widthPixel(6),
    height: layout.heightPixel(6),
    borderRadius: layout.fontPixel(6),
    marginHorizontal: layout.pixelSizeHorizontal(5),
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
  },
});
