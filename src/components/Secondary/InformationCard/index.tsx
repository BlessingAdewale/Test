import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GreyArea } from '../GreyArea'
import { ProductHeader } from '../ProductHeader';
import { AllDataType } from '@constants';





export const InformationCard = ({data}: AllDataType  ) => {

    const renderItem = React.useCallback(({ item }: any) => {
        return <View>
        <View>

        </View>

        </View>;
      }, []);

  return (
    <View>
      <ProductHeader title={data.title} />
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}



const styles = StyleSheet.create({})