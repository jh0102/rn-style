import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {styles, orangeText} from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: 'orange'}]}>Style Code</Text>
      <Text style={[styles.text,styles.erroText]}>Error Text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     backgroundColor: 'black', 
//     color: 'white', 
//     fontSize: 20
//   },
//   erroText: {
//     color : 'red',
//   }
// });
