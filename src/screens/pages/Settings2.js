import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  BackHandler,
  StatusBar,
} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext, TextContext} from '../../Context/GlobalState';

const exit = () => {
  Alert.alert(
    'Exit App',
    'Do you want to exit?',
    [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
    ],
    {cancelable: false},
  );
  return true;
};

const Settings2 = ({navigation}) => {
  const [Dark, setDark] = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Dark ? 'black' : 'white',
        alignItems: 'flex-start',
      }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate('General')}>
          <Text style={(styles.text, {color: Dark ? 'white' : 'dark'})}>
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textWrapper} onPress={() => '#'}>
          <View>
            <Text style={(styles.text, {color: Dark ? 'white' : 'dark'})}>
              Rating
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate('About', {pageName: 'about'})}>
          <Text style={(styles.text, {color: Dark ? 'white' : 'dark'})}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => Alert.alert('Emergency Call Version', 'Version v1.0')}>
          <Text style={(styles.text, {color: Dark ? 'white' : 'dark'})}>
            Version
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textWrapper} onPress={() => exit()}>
          <Text style={(styles.text, {color: Dark ? 'white' : 'dark'})}>
            Exit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings2;

const styles = StyleSheet.create({
  container: {
    padding: StatusBar.currentHeight,
  },
  text: {paddingTop: 30, fontSize: 15, fontWeight: '700'},
  textWrapper: {width: 500, height: 50},
});
