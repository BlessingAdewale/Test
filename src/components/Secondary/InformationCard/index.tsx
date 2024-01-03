import { FlatList, StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { GreyArea } from '../GreyArea';
import { ProductHeader } from '../ProductHeader';
import { AllDataType, images } from '@constants';
import { layout } from '@utils';

export const InformationCard = ({ data, title }: any) => {
  const renderItem = React.useCallback(({ item }: any) => {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={item.image} />
        <Text>{item.name}</Text>
        <View style={styles.ratingWrapper}>
          <Image source={images.rating} />
          <Text>({item.numberOfPeopleThatRated})</Text>
          
        </View>
        <Text># {item.price} (per kg)</Text>
      </View>
    );
  }, []);

  return (
    <View>
      <ProductHeader title={title} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: layout.widthPixel(164),
    height: layout.heightPixel(100),
    borderRadius: layout.fontPixel(8),
    paddingRight: layout.pixelSizeHorizontal(20),
  },
  wrapper: {
    marginHorizontal: layout.pixelSizeHorizontal(20),
    paddingTop: layout.pixelSizeVertical(24),
  },
  ratingWrapper: {
    flexDirection: 'row',
  },
});
