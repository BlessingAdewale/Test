import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ProductDetailsNavigationProp, ProductDetailsProp } from 'navigation/types';
import { globalStyles } from '@globalStyles';
import { images, theme } from '@constants';
import { AntDesign } from '@expo/vector-icons';
import { layout } from '@utils';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-paper';
import { Divider } from '@components';
import DownloadButton from '@assets/images/download.svg';
import { styles } from './styles';


export const ProductDetails = () => {
  const route = useRoute<ProductDetailsProp | any>();

  const navigation = useNavigation<ProductDetailsNavigationProp>();
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.wrapper}>
          <View style={[styles.headerContainer, globalStyles.rowCenter]}>
            <Text style={styles.details}>Details</Text>
          </View>
          <AntDesign
            name="arrowleft"
            size={14}
            color="rgba(28, 28, 28, 1)"
            style={styles.arrowLeft}
            aria-selected={true}
            onPress={() => navigation.popToTop()}
          />
        </View>

        <View style={styles.cardContent}>
          <Image source={route.params.image} resizeMode="cover" style={styles.image} />
          <View style={[styles.wrapper1]}>
            <View style={[globalStyles.rowBetween]}>
              <Text style={styles.name}>{route.params.name}</Text>
              <View style={styles.wholesaleWrapper}>
                <Text style={styles.wholesale}>Wholesale</Text>
              </View>
            </View>

            <View
              style={[globalStyles.rowBetween, { paddingVertical: layout.pixelSizeVertical(16) }]}
            >
              <Text style={styles.seller}>
                Seller: <Text style={styles.sellerText}> {route.params.seller}</Text>{' '}
              </Text>
              <View style={styles.ratingWrapper}>
                <Image source={images.rating} />
                <Text style={styles.numberOfPeople}>({route.params.numberOfPeopleThatRated})</Text>
              </View>
            </View>
            <Divider />
            <Text style={styles.loremIpsum}>
              {route.params.note}
              <Text style={styles.readmore} onPress={() => null}>
                Read more
              </Text>
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              # {route.params.price} <Text style={styles.perKg}>(per kg)</Text>
            </Text>
          </View>

          <View style={styles.wrapper2}>
            <View style={styles.horizontalRule} />
            <View>
              <Text style={styles.warehouse}>WAREHOUSE INFORMATION</Text>
            </View>
            <View style={styles.horizontalRule} />
          </View>

          <Card mode="outlined" style={styles.card}>
            <Card.Content>
              <View style={styles.wrapper3}>
                <Text style={styles.warehouseDistribution}>Warehouse distribution</Text>
                <View style={[globalStyles.rowBetween]}>
                  <Text style={styles.firstItem}>{route.params.warehouseDistribution.name}</Text>
                  <Text style={styles.weight}>{route.params.warehouseDistribution.weight}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.warehouseCertificate}>Warehouse certificate</Text>
                <View style={[globalStyles.rowBetween]}>
                  <Text style={styles.firstItem}>{route.params.warehouseCertificate.title}</Text>
                  <TouchableOpacity>
                    <Text style={styles.download}>
                      Download
                      <DownloadButton
                        height={layout.heightPixel(21)}
                        width={layout.widthPixel(21)}
                        style={styles.downloadButton}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Content>
          </Card>
          <View style={styles.productBackground} >
            <Text style={styles.productText} >{route.params.productType}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={[globalStyles.rowBetween, styles.lastWrap]}>
        <Button
          children="1"
          mode="outlined"
          buttonColor={theme.colors.secondary}
          style={styles.button1}
          icon="minus"
          
        />
        <Button
          children="Proceed to purchase"
          mode="contained"
          style={styles.button2}
          buttonColor={theme.colors.primary}
        />
      </View>
    </SafeAreaView>
  );
};

