import { DefaultTheme, MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,

  dark: false,
  colors: {
    ...DefaultTheme.colors,
    teal1: '#0898A0',
    teal2: '#41BCC4',
  },
};
