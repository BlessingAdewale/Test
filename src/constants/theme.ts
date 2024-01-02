import { DefaultTheme, MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,

  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    primary: '#006D33',
    secondary: '#F0F5EC',
    whiteTextColor: '#FFF',
    blackTextCoor: '#090909',
    greetingColor: '#110',
    greyColor: '#BEBEBE',
    grey2Color: '#8B8B8B'

  },
};
