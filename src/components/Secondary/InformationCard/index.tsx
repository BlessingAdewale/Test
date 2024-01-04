import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { GreyArea } from '../GreyArea';
import { ProductHeader } from '../ProductHeader';
import { AllDataType, images, theme } from '@constants';
import { layout } from '@utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeTabNavigationProp} from 'navigation/types';

interface Props {
  data: AllDataType;
  title: string;
}

export const InformationCard = ({ data, title }: Props | any) => {
  const navigation = useNavigation<HomeTabNavigationProp>();
  
  const renderItem = React.useCallback(({ item }: AllDataType | any) => {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate('ProductDetails', item)}>
          <Image style={styles.image} source={item.image} />
        </TouchableOpacity>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingWrapper}>
          <Image source={images.rating} />
          <Text style={styles.numberOfPeople}>({item.numberOfPeopleThatRated})</Text>
        </View>
        <Text style={styles.price}>
          # {item.price} <Text style={styles.perKg}>(per kg)</Text>
        </Text>
      </View>
    );
  }, []);

  return (
    <View>
      <ProductHeader title={title} />
      <View style={{ paddingHorizontal: layout.pixelSizeHorizontal(20) }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
    paddingTop: layout.pixelSizeVertical(24),
    paddingRight: layout.pixelSizeHorizontal(20),
  },
  ratingWrapper: {
    flexDirection: 'row',
  },
  name: {
    color: theme.colors.blackTextCoor,
    fontSize: layout.fontPixel(14),
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
    paddingTop: layout.pixelSizeVertical(8),
    paddingBottom: layout.pixelSizeVertical(12),
  },
  numberOfPeople: {
    color: theme.colors.grey2Color,
    paddingBottom: layout.pixelSizeVertical(19),
  },
  price: {
    color: theme.colors.blackTextCoor,
    fontSize: layout.fontPixel(16),
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    paddingBottom: layout.pixelSizeVertical(24),
  },
  perKg: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: theme.colors.blackTextCoor,
    fontFamily: 'Poppins_400Regular_Italic',
  },
});
