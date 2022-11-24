import {View, Text, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import NavBarBtn from '../routes/NavigatorBarBtnScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext, TextContext} from '../../Context/GlobalState';
export default function NavigatorAll() {
  const isDarkMode = useColorScheme() === 'dark';
  const [dark, setDark] = useState(isDarkMode);
  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <NavigationContainer>
        <NavBarBtn />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
