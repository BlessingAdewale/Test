import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { globalStyles } from '@globalStyles'
import { HomeHeader, SearchFeature } from '@components'

export const Home = () => {
  return (
    <SafeAreaView  style={[globalStyles.container]}    >
     <HomeHeader />
     <SearchFeature />
    </SafeAreaView>
  )
}

