import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { globalStyles } from '@globalStyles';
import { CarouselSlide, HomeHeader, SearchFeature, InformationCard } from '@components';
import { livestockData, refrigeratedData, dryProductsData, farmInputsData } from '@constants';
import { usePlatform } from '@hooks';

export const Home = () => {
  return (
   
    <SafeAreaView style={[globalStyles.container]}>
      
      <ScrollView showsVerticalScrollIndicator={false} >
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
