// In App.js in a new project
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/homescreen';
import Ambulance from '../pages/Ambulance2';
import Firefighter from '../pages/FireFighter2';
import Police from '../pages/Police2';
import About from '../pages/About';
import NewsDetail from '../pages/News_Detail';
import General from '../pages/General.js';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Ambulance" component={Ambulance} />
      <Stack.Screen name="Firefighter" component={Firefighter} />
      <Stack.Screen name="Police" component={Police} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="General" component={General} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
