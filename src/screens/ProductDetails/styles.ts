import { layout } from '@utils';
import { theme } from '@constants';
import { usePlatform } from '@hooks';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.background,
  },
  wrapper: {
    backgroundColor: theme.colors.background,
    paddingTop: usePlatform().isAndroid ? layout.pixelSizeVertical(90) : 0,
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
    left: usePlatform().isAndroid ? layout.pixelSizeHorizontal(16) : layout.pixelSizeHorizontal(16),
    top: usePlatform().isAndroid ? layout.pixelSizeVertical(108) : layout.pixelSizeVertical(18),
  },
  cardContent: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  productBackground: {
    backgroundColor: theme.colors.redColor,
    borderRadius: layout.fontPixel(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: layout.pixelSizeHorizontal(132),
    position: 'absolute',
    left: layout.widthPixel(175),
    top: layout.heightPixel(22),
  },
  productText: {
    color: '#FFFFFF',
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
