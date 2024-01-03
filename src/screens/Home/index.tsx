import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '@globalStyles';
import { CarouselSlide, HomeHeader, SearchFeature, InformationCard } from '@components';

export const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <HomeHeader />
      <SearchFeature />
      <CarouselSlide />
      <InformationCard />

    </SafeAreaView>
  );
};
