import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { Pagination } from '@components';
import { carouselData } from '@constants';

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
  return (
    <View>
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

const styles = StyleSheet.create({});
