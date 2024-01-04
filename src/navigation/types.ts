import { ProductDetails } from '@screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  HomeStack: undefined;
  ProductDetails: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
  Orders: undefined;
  Wallet: undefined;
  Profile: undefined;
};

export type HomeTabNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeStack'>;
export type ProductDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;
export type ProductDetailsProp = RouteProp<RootStackParamList, 'ProductDetails'>;
