import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import callLogo from '../../assets/image/call.png';
import Icon from 'react-native-vector-icons/Ionicons';
export default function ButtonAnswer({onpress}) {
  return (
    <TouchableNativeFeedback onPress={onpress}>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonImageWrapper}>
          <Icon name="call" size={25} color={'white'} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  buttonImage: {width: 5, height: 5},
  buttonImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
  },
});
