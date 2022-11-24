import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {Children} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Homescreen from '../pages/homescreen';
import HomescreenPage from '../pages/homescreen';
import NewsPage from '../pages/News';
import SettingsPage from '../pages/Settings2';
import Home from './AppNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Main = 'Main';
const settings = 'Settings';
const news = 'News';
const News = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const NavigatorScreen = ({navigation}) => {
  return (
    <tab.Navigator
      initialRouteName={Main}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          size = 20;
          if (rn === Main) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === settings) {
            iconName = focused ? 'settings' : 'settings';
          } else if (rn === news) {
            iconName = focused ? 'logo-hackernews' : 'logo-hackernews';
          } else if (rn === 'NewsDetail') {
            iconName = focused ? 'settings' : 'settings';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        headerShadowVisible: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'coral',
      })}>
      <tab.Screen name={Main} component={Home} />
      <tab.Screen name={news} component={NewsPage} />
      <tab.Screen name={settings} component={SettingsPage} />
    </tab.Navigator>
  );
};

export default NavigatorScreen;
