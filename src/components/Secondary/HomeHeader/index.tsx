import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { images, theme } from '@constants';
import MyNotificationImage from '@assets/images/notification.svg';
import WavingHand from '@assets/images/waving.svg';
import { layout } from '@utils';
import { usePlatform } from '@hooks';

const date = new Date();
const currentTime = date.getHours();

let greeting: string;

if (currentTime >= 0 && currentTime <= 12) {
  greeting = 'Good Morning';
} else if (currentTime > 12 && currentTime <= 18) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good Evening';
}

export const HomeHeader = () => {
  return (
    <View style={styles.firstWrapper}>
      <View style={styles.secondWrapper}>
        <Avatar.Image
          size={28}
          source={images.avatar}
          theme={{ colors: { primary: theme.colors.secondary } }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greeting}>
            {greeting}
            <WavingHand height={layout.heightPixel(20)} width={layout.widthPixel(20)} />
          </Text>
          <Text style={styles.welcomeback}>Welcome back </Text>
        </View>
      </View>
      <TouchableOpacity>
        <MyNotificationImage height={layout.heightPixel(34)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  firstWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: usePlatform().isAndroid
      ? layout.pixelSizeVertical(90)
      : layout.pixelSizeVertical(20),
    paddingHorizontal: usePlatform().isAndroid ? 0 : layout.pixelSizeHorizontal(20),
    paddingBottom: layout.pixelSizeVertical(20),
  },
  secondWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    marginRight: layout.pixelSizeHorizontal(24),
  },
  greeting: {
    color: '#110',
    fontSize: layout.fontPixel(16),
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  welcomeback: {
    color: '#110',
    fontSize: layout.fontPixel(13),
    fontWeight: '300',
    fontFamily: 'Poppins_300Light',
  },
});
