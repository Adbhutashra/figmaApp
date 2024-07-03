import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomeScreen';
import BookOpenBlack from '../assets/book-open-black.svg';
import BookmarkBlack from '../assets/bookmark-black.svg';
import TvBlack from '../assets/tv-black.svg';
import UserBlack from '../assets/user-black.svg';
import BellBlack from '../assets/bell-black.svg';
import BookOpenWhite from '../assets/book-open-white.svg';
import BookmarkWhite from '../assets/bookmark-white.svg';
import TvWhite from '../assets/tv-white.svg';
import UserWhite from '../assets/user-white.svg';
import BellWhite from '../assets/bell-white.svg';
import { View } from 'react-native';

function BookmarkScreen() {
  return null;
}

function TvScreen() {
  return null;
}

function BellScreen() {
  return null;
}

function UserScreen() {
  return null;
}

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let IconName;

          if (route.name === 'Home') {
            IconName = focused ? BookOpenWhite : BookOpenBlack;
          } else if (route.name === 'Bookmark') {
            IconName = focused ? BookmarkWhite : BookmarkBlack;
          } else if (route.name === 'TV') {
            IconName = focused ? TvWhite : TvBlack;
          } else if (route.name === 'Bell') {
            IconName = focused ? BellWhite : BellBlack;
          } else if (route.name === 'User') {
            IconName = focused ? UserWhite : UserBlack;
          }

          return (
            <View style={{backgroundColor: focused ? 'black' : 'white', borderRadius: 30, height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}>
              <IconName />
            </View>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 40,
          height: 70,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="TV" component={TvScreen} />
      <Tab.Screen name="Bell" component={BellScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
