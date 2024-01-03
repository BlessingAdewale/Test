import { Animated, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { Pagination } from '../Pagination';
import { carouselData, carouselDataType, theme } from '@constants';
import { layout } from '@utils';
import { LinearGradient } from 'expo-linear-gradient';

export const CarouselSlide = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = () => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffSet: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    );
  };

  const renderItem = React.useCallback(({ item }: carouselDataType) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[' rgba(0, 0, 0, 0.87)', ' rgba(0, 0, 0, 0.87)']}
          style={styles.background}
        />
        <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  }, []);

  return (
    <View style={styles.totalWrapper}>
      <FlatList
        horizontal
        data={carouselData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        // bounces={false}
        snapToAlignment="center"
        onScroll={handleOnScroll}
      />
      <Pagination data={carouselData} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  totalWrapper: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
   
  },
  text: {
    paddingVertical: layout.pixelSizeVertical(25),
    paddingRight: layout.pixelSizeHorizontal(99),
    paddingLeft: layout.pixelSizeHorizontal(16),
    color: theme.colors.whiteTextColor,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  container: {
    width: layout.widthPixel(253),
    height: layout.heightPixel(279),
    marginBottom: layout.pixelSizeHorizontal(16),
  },

  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: layout.fontPixel(8),
    width: layout.widthPixel(223),
    height: layout.heightPixel(279),
  },
  background: {
    width: layout.widthPixel(223),
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: layout.heightPixel(279),
    borderRadius: layout.fontPixel(8),
  },
});
