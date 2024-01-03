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
        />
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <MySearchButton height={layout.heightPixel(96)} width={layout.widthPixel(54)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  searchButton: {
    position: 'absolute',
    right: layout.widthPixel(12),
    left: layout.widthPixel(325),
    height: layout.heightPixel(25),
  },
  searchContainer: {
    backgroundColor: 'rgba(242, 242, 242, 0.50)',
    borderRadius: layout.fontPixel(8),
    marginRight: layout.pixelSizeHorizontal(49),
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
});
