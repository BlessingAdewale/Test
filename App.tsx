import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from './src/navigation/NavigationContainer';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-core';
import { useFontsHelper, usePlatform } from '@hooks';

export default function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }
  return (
    <PaperProvider>
      <StatusBar style="dark" />
      <NavigationContainer />
    </PaperProvider>
  );
}


