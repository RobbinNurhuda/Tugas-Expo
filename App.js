import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeUI from './Tugas/tugas12/App';
import Login from './Tugas/tugas13/LoginScreen'

export default function App() {
  return (
    // <YoutubeUI />
    <View style={styles.container}>
      {/* <YoutubeUI /> */}
      {/* <Text>123</Text> */}
      {/* <Login/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
