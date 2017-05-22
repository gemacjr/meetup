import React from 'react';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
//import styled from 'styled-components/native';
import { Button, Icon } from 'native-base';

import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen
} from '../screens';

const NavbarDefaultStyle = {
  backgroundColor: Colors.redColor,

};

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: NavbarDefaultStyle,
      headerRight: (

          <Button transparent onPress={() => navigation.navigate('CreateMeetup')}>
            <MaterialIcons  name="add-circle" size={30} color="#fff" />
          </Button>

      ),

      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      headerStyle: NavbarDefaultStyle,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="notifications"
          size={25}
          color={tintColor}
        />
      ),
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerStyle: NavbarDefaultStyle,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      ),
    },
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {

    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,             // android
    indicatorStyle: { backgroundColor: Colors.redColor }, // android
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
