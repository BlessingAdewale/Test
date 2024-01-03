import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { images } from '@constants';
import MyNotificationImage from '@assets/images/notification.svg';
import WavingHand from '@assets/images/waving.svg';
import { layout } from '@utils';

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
        <Avatar.Image size={48} source={images.avatar} style={styles.avatar} />
        <View>
          <Text>
            {greeting}
            <WavingHand height={layout.heightPixel(20)} width={layout.widthPixel(20)} />
          </Text>
          <Text>Welcome back </Text>
        </View>
      </View>
      <TouchableOpacity>
        <MyNotificationImage height={layout.heightPixel(52)}  />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  firstWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: layout.pixelSizeVertical(20),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
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
});
