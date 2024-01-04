import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { globalStyles } from '@globalStyles';
import { CarouselSlide, HomeHeader, SearchFeature, InformationCard } from '@components';
import { livestockData, refrigeratedData, dryProductsData, farmInputsData } from '@constants';
import { usePlatform } from '@hooks';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: usePlatform().isAndroid ?tabBarHeight + 300: tabBarHeight + 80 }}
      >
        <HomeHeader />
        <SearchFeature />
        <CarouselSlide />

        <InformationCard title="Livestock Products" data={livestockData} />
        <InformationCard title="Refrigerated Products" data={refrigeratedData} />
        <InformationCard title="Dry Products" data={dryProductsData} />
        <InformationCard title="Farm Inputs" data={farmInputsData} />
      </ScrollView>
    </SafeAreaView>
  );
};
