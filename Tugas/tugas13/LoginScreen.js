import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
