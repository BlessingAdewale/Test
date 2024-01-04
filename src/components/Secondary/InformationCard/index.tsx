import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { GreyArea } from '../GreyArea';
import { ProductHeader } from '../ProductHeader';
import { AllDataType, images, theme } from '@constants';
import { layout } from '@utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeTabNavigationProp} from 'navigation/types';
import { styles } from './styles';

interface Props {
  data: AllDataType;
  title: string;
}

export const InformationCard = ({ data, title }: Props | any) => {
  const navigation = useNavigation<HomeTabNavigationProp>();
  
  const renderItem = React.useCallback(({ item }: AllDataType | any) => {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate('ProductDetails', {...item})}>
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

