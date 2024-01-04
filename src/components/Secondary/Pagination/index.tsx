import { theme } from '@constants';
import { layout } from '@utils';
import React from 'react';
import { StyleSheet, Animated, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Pagination = ({ data, scrollX, index }: any) => {
  return (
    <View style={styles.container}>
      {data.map((item: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 14, 6],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [ "#f1ebeb","#006D33", "#D9D9D9"]
        })

        return <Animated.View key={idx} style={[styles.dot, { width: dotWidth, backgroundColor },
          //  idx === index && styles.dotActive
          
          ]} />;
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
    bottom: layout.heightPixel(10),
    // right: layout.widthPixel(12),
    // left: layout.widthPixel(151),
    // top: layout.heightPixel(0)
  },

  dot: {
    width: layout.widthPixel(10),
    height: layout.heightPixel(8),
    borderRadius: layout.fontPixel(600),
    marginHorizontal: layout.pixelSizeHorizontal(3),
    // backgroundColor: '#110',
  },
  dotActive:{
    // backgroundColor: theme.colors.primary
  }
});
