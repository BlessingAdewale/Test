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
        <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
          <LinearGradient
            colors={[' rgba(0, 0, 0, 0)', ' rgba(0, 0, 0, 0.87)']}
            style={styles.background}
          />
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  }, []);

  // const handleOnViewableItemsChanged = useRef(({viewableItems})=> {
  //   setIndex(viewableItems.[0].index);}).current
  // })

  // const viewabilityConfig = useRef({
  //   itemVisiblePercentThreshold: 50,
  // }.current)

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
        // onViewableItemsChanged={handleOnViewableItemsChanged}
        // viewabilityConfig={viewabilityConfig}
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
    width: layout.widthPixel(123),
    height: layout.heightPixel(279),
    marginBottom: layout.pixelSizeHorizontal(16),
    marginRight: 130,
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
