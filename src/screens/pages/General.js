import React, {useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  Switch,
} from 'react-native';
import {ThemeContext} from '../../Context/GlobalState';

const General = () => {
  const [Dark, setDark] = useContext(ThemeContext);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Dark ? 'black' : 'white',
      }}>
      <Text style={{color: Dark ? 'white' : 'black'}}>Dark Mode</Text>
      <View>
        <Switch value={Dark} onValueChange={val => setDark(val)} />
      </View>
    </View>
  );
};

export default General;
