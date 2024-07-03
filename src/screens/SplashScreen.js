import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Splash from '../assets/splash.svg';
import SplashText from '../assets/splashname.svg';

const {width, height} = Dimensions.get('window');

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTab');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Splash width={width * 0.8} height={height * 0.15} />
      <View style={styles.textContainer}>
        <SplashText width={width * 0.3} height={height * 0.1} />
        <Image
          style={styles.profile}
          source={require('../assets/splashProfile.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.6,
    left: width * 0.5,
    alignItems: 'center',
  },
  profile: {
    marginLeft: width * 0.08,
    width: width * 0.2,
    height: height * 0.1,
  },
});
