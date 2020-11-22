import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Component from './Latihan/Component/Component';
// import YoutubeUI from './Tugas/Tugas12/App';
// import Noter from './Tugas/Tugas14/App';
// import SkillScreen from './Tugas/Tugas14/SkillScreen'
// import TugasNavigation from './Tugas/TugasNavigation/index'
// import JawabanQuiz3 from './Backup/JawabanQuiz3/index'
import Quiz3 from './Quiz3/index';

import LatihanRedux from './Latihan/Redux/index'
import SimpleRedux from './Latihan/Redux/SimpleRedux'

export default function App() {
  return (
    // <LatihanRedux />
    // <SimpleRedux />
    <Quiz3 />
    // <JawabanQuiz3 />
    // <TugasNavigation />
    // <Tugas15 />
    // <SkillScreen />
    // <Noter />
    // <YoutubeUI />
    // <Component />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
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
