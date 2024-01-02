import { DefaultTheme, MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,

  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    primary: '#006D33',
    secondary: '#F0F5EC',
    tertiary: '#6D9E3F',
    whiteTextColor: '#FFF',
    blackTextCoor: '#090909',
    greetingColor: '#110',
    redColor: '#DB371F',
    greyColor: '#BEBEBE',
    grey2Color: '#8B8B8B',
    grey3Color: '#686868',
    grey4Color: '#585858',
    arrowColor: '#1C1C1C',
    bottomTabColor: 'rgba(0, 0, 0, 0.50)'
  },
};
