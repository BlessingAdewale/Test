import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ProductDetailsProp } from 'navigation/types'
import { globalStyles } from '@globalStyles'
import { theme } from '@constants'

export const ProductDetails = () => {
  const route =useRoute<ProductDetailsProp>()
  return (
    <SafeAreaView>
      <View style={[styles.headerContainer, globalStyles.rowCenter]} >

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: theme.colors.secondary,
  
  }
})
