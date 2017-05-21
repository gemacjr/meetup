import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

class ProfileScreen extends Component {
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
        <Text>Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;
