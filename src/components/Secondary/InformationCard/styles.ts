import { layout } from '@utils';
import { theme } from '@constants';
import { usePlatform } from '@hooks';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    image: {
      width: layout.widthPixel(164),
      height: layout.heightPixel(100),
      borderRadius: layout.fontPixel(8),
      paddingRight: layout.pixelSizeHorizontal(20),
    },
    wrapper: {
      paddingTop: layout.pixelSizeVertical(24),
      paddingRight: layout.pixelSizeHorizontal(20),
    },
    ratingWrapper: {
      flexDirection: 'row',
    },
    name: {
      color: theme.colors.blackTextCoor,
      fontSize: layout.fontPixel(14),
      fontFamily: 'Poppins_400Regular',
      fontWeight: '400',
      paddingTop: layout.pixelSizeVertical(8),
      paddingBottom: layout.pixelSizeVertical(12),
    },
    numberOfPeople: {
      color: theme.colors.grey2Color,
      paddingBottom: layout.pixelSizeVertical(34),
    },
    price: {
      color: theme.colors.blackTextCoor,
      fontSize: layout.fontPixel(16),
      fontFamily: 'Poppins_600SemiBold',
      fontWeight: '600',
      paddingBottom: layout.pixelSizeVertical(24),
    },
    perKg: {
      fontStyle: 'italic',
      fontWeight: '400',
      color: 'rgba(9, 9, 9, 1)',
      fontFamily: 'Poppins_400Regular_Italic',
    },
  });