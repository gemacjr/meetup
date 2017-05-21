import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

class NotificationsScreen extends Component {
  state = { }

  // static navigationOptions = {
  //   tabBar: {
  //     icon: () => (
  //       <Ionicons name="ios-home" size={24} color="blue" />
  //     )
  //   }
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

export default NotificationsScreen;
