import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { layout } from '@utils';
import MySearchButton from '@assets/images/searchbutton.svg';
import { Feather, EvilIcons } from '@expo/vector-icons';

export const SearchFeature = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          placeholder="Search for products and inputs"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchContainer}
          placeholderTextColor={'#BEBEBE'}
          iconColor={'#BEBEBE'}
          rippleColor={'#BEBEBE'}
          traileringRippleColor={'#BEBEBE'}
          inputStyle={styles.inputStyle}
        />
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <MySearchButton height={layout.heightPixel(98)} width={layout.widthPixel(54)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    marginBottom: layout.heightPixel(24),
  },
  searchButton: {
    position: 'absolute',
    right: layout.widthPixel(12),
    left: layout.widthPixel(325),
    height: layout.heightPixel(27),
    bottom: layout.heightPixel(72),
  },
  searchContainer: {
    backgroundColor: 'rgba(242, 242, 242, 0.50)',
    borderRadius: layout.fontPixel(12),
    marginRight: layout.pixelSizeHorizontal(49),
  },
  inputStyle: {
    fontSize: layout.fontPixel(14),
    fontWeight: '400',
    fontFamily: 'Poppins_600SemiBold',
  },
});
