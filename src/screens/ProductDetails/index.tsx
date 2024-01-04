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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.background,
  },
  wrapper: {
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    backgroundColor: theme.colors.secondary,
    height: layout.heightPixel(56),
    marginBottom: layout.pixelSizeVertical(24),
  },
  details: {
    color: 'rgba(9, 9, 9, 1)',
    fontFamily: 'Poppins_400Regular',
    fontSize: layout.fontPixel(12),
    fontWeight: '400',
  },
  arrowLeft: {
    position: 'absolute',
    left: layout.pixelSizeHorizontal(16),
    top: layout.pixelSizeVertical(18),
  },
  cardContent: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  productBackground:{
    backgroundColor: theme.colors.redColor,
    borderRadius: layout.fontPixel(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: layout.pixelSizeHorizontal(132),
    position: 'absolute',
    left: layout.widthPixel(175),
    top: layout.heightPixel(22)
  },
productText:{
color: "#FFFFFF",
fontWeight: '600',
fontSize: layout.fontPixel(12),
fontFamily: 'Poppins_600SemiBold',
paddingHorizontal: layout.pixelSizeHorizontal(10),
},
  image: {
    width: layout.widthPixel(350),
    height: layout.heightPixel(200),
    borderTopRightRadius: layout.fontPixel(8),
    borderTopLeftRadius: layout.fontPixel(8),
  },
  wholesale: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: layout.fontPixel(10),
  },
  wrapper1: {
    paddingHorizontal: layout.pixelSizeHorizontal(16),
    paddingTop: layout.pixelSizeVertical(16),

    backgroundColor: theme.colors.background,
  },
  wholesaleWrapper: {
    backgroundColor: 'rgba(109, 158, 63, 1)',
    borderRadius: layout.fontPixel(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: layout.pixelSizeHorizontal(5),
    elevation: 2,
    shadowColor: '#090909',
  },
  name: {
    color: 'rgba(9, 9, 9, 1)',
    fontSize: layout.fontPixel(21),
    fontFamily: 'Poppins_500Medium',
    fontWeight: '500',
  },
  ratingWrapper: {
    flexDirection: 'row',
  },
  numberOfPeople: {
    color: theme.colors.grey2Color,
    paddingBottom: layout.pixelSizeVertical(19),
  },
  seller: {
    color: 'rgba(104, 104, 104, 1)',
    fontSize: layout.fontPixel(14),
    fontFamily: 'Poppins_500Medium',
  },
  sellerText: {
    color: 'rgba(9, 9, 9, 1)',
    fontWeight: '400',
    fontSize: layout.fontPixel(14),
    fontFamily: 'Poppins_500Medium',
  },
  loremIpsum: {
    color: '#686868',
    fontFamily: 'Poppins_400Regular',
    fontSize: layout.fontPixel(12),
    fontWeight: '400',
    paddingTop: layout.pixelSizeVertical(16),
    paddingBottom: layout.pixelSizeVertical(17),
    paddingRight: layout.pixelSizeHorizontal(96),
  },
  readmore: {
    color: 'rgba(0, 109, 51, 1)',
    fontFamily: 'Poppins_400Regular',
    fontSize: layout.fontPixel(12),
    fontWeight: '400',
  },
  price: {
    color: theme.colors.blackTextCoor,
    fontSize: layout.fontPixel(16),
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: '600',
    paddingBottom: layout.pixelSizeVertical(24),
    paddingLeft: layout.pixelSizeHorizontal(18),
    paddingTop: layout.pixelSizeVertical(20),
  },
  perKg: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: 'rgba(9, 9, 9, 1)',
    fontFamily: 'Poppins_400Regular_Italic',
  },
  priceContainer: {
    backgroundColor: theme.colors.secondary,
    borderBottomEndRadius: layout.fontPixel(8),
    borderBottomStartRadius: layout.fontPixel(8),
    marginBottom: layout.pixelSizeVertical(24),
    elevation: 1,
  },
  horizontalRule: {
    flex: 1,
    height: layout.heightPixel(1),
    borderRadius: layout.fontPixel(5),
    backgroundColor: '#EAEAEA',
  },
  warehouse: {
    color: theme.colors.greyColor,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    fontSize: layout.fontPixel(14),
    paddingHorizontal: layout.pixelSizeHorizontal(4),
  },
  wrapper2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: layout.pixelSizeVertical(16),
  },

  wrapper3: {
    marginBottom: layout.pixelSizeVertical(24),
  },
  card: {
    backgroundColor: theme.colors.background,
    borderRadius: layout.fontPixel(8),
    borderWidth: 0,
    borderColor: '#EAEAEA',
  },
  warehouseDistribution: {
    color: '#004D24',
    fontFamily: 'Poppins_500Medium',
    fontSize: layout.fontPixel(12),
    fontWeight: '500',
    paddingBottom: layout.pixelSizeVertical(8),
  },

  warehouseCertificate: {
    color: '#004D24',
    fontFamily: 'Poppins_500Medium',
    fontSize: layout.fontPixel(12),
    fontWeight: '500',
    paddingBottom: layout.pixelSizeVertical(8),
  },
  firstItem: {
    color: '#898B87',
    fontFamily: 'Poppins_400Regular',
    fontSize: layout.fontPixel(14),
    fontWeight: '400',
  },
  weight: {
    color: '#1F1F1F',
    fontFamily: 'Poppins_500Medium',
    fontSize: layout.fontPixel(14),
    fontWeight: '500',
  },

  download: {
    color: '#006D33',
    fontFamily: 'Poppins_500Medium',
    fontSize: layout.fontPixel(14),
    fontWeight: '500',
  },
  downloadButton: {
    paddingTop: layout.pixelSizeVertical(19),
  },
  lastWrap: {
    backgroundColor: theme.colors.background,
    height: layout.widthPixel(72),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  button1: {
    borderRadius: layout.fontPixel(8),
    marginRight: layout.pixelSizeVertical(90),
  },

  button2: {
    flex: 1,
    borderRadius: layout.fontPixel(8),
  },

  scrollViewContainer: {},
});
