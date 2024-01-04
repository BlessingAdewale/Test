import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TabNavigationState, ParamListBase, NavigationHelpers } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '@constants';
import { usePlatform } from '@hooks';
import { layout } from '@utils';
import HomeFocused from '@assets/images/homefocused.svg';
import Orders from '@assets/images/orders.svg';
import Wallet from '@assets/images/wallet.svg';
import Profile from '@assets/images/profile.svg';
export const routes = {
  home: { name: 'Home', icon: 'home' },
  orders: { name: 'Orders', icon: 'orders' },
  wallet: { name: 'Wallet', icon: 'wallet' },
  profile: { name: 'Profile', icon: 'profile' },
};
type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const { width } = Dimensions.get('window');

// 20 on each side for absolute positioning of the tab bar
// 20 on each side for the internal padding
const TAB_WIDTH = (width - 40 * 2) / 4;

const TabBarComponent = ({ state, navigation, descriptors }: Props) => {
  const translateX = useSharedValue(0);
  const focusedTab = state.index;

  const handleAnimate = (index: number) => {
    'worklet';
    translateX.value = withTiming(index * TAB_WIDTH, {
      duration: 1000,
    });
  };
  useEffect(() => {
    runOnUI(handleAnimate)(focusedTab);
  }, [focusedTab]);

  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <>
      <Animated.View style={[styles.container, rnStyle]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const routeName = route.name.toLowerCase() as keyof typeof routes;
        const icon = routes[routeName]?.icon;
        return (
          <Pressable
            key={`route-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            {/* <AntDesign
              // name={icon}
              size={15}
              color={isFocused ? theme.colors.primary : theme.colors.bottomTabColor}
            /> */}
            {icon === 'home' && isFocused ? (
              <HomeFocused height={layout.heightPixel(24)} width={layout.widthPixel(24)} />
            ) : null}
            
            {/* {icon === 'orders' && isFocused ? null : (
              <Orders height={layout.heightPixel(24)} width={layout.widthPixel(24)} />
            )}
            {icon === 'wallet' && isFocused ? null : (
              <Wallet height={layout.heightPixel(24)} width={layout.widthPixel(24)} />
            )}
            {icon === 'profile' && isFocused ? null : (
              <Profile height={layout.heightPixel(24)} width={layout.widthPixel(24)} />
            )} */}

            <Text
              style={{
                color: isFocused ? theme.colors.primary : 'rgba(0, 0, 0, 0.50)',
                fontFamily: 'Poppins_400Regular',
                fontSize: layout.fontPixel(14),
                fontWeight: '400',
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  container: {
    width: TAB_WIDTH,
    height: layout.heightPixel(4),
    backgroundColor: theme.colors.primary,
    zIndex: 0,
    position: 'absolute',
    bottom: usePlatform().isAndroid ? layout.heightPixel(68) : layout.heightPixel(67),
    marginHorizontal: layout.pixelSizeHorizontal(5),
    // marginBottom: 150,
    borderBottomRightRadius: layout.fontPixel(20),
    borderBottomLeftRadius: layout.fontPixel(20),
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
