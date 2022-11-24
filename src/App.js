import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppNavigator from './screens/routes/AppNavigator';
import NavBarBtn from './screens/routes/NavigatorBarBtnScreen';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './screens/pages/Welcome';
import NavigatorAll from './screens/routes/NavigatorAll';
const App = () => {
  return <NavigatorAll />;
};

export default App;

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    fontFamily: 'Inter-BlackItalic',
    fontSize: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
