import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

export default function Index(props) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={props.onpress}>
        <View style={styles.wrapper}>
          <View style={[styles.containerbutton, props.color]}>
            <View style={styles.imageButtonWrapper}>
              <Image style={styles.imageButton} source={props.gambar} />
            </View>
            <View style={styles.textButtonWrapper}>
              <Text style={styles.textButton}> {props.judul} </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  imageButtonWrapper: {
    width: 116 / 2,
    height: 116 / 2,
    // backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButton: {
    width: 126 / 2,
    height: 156 / 2,
    // backgroundColor: 'coral',
  },
  wrapper: {
    paddingTop: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbutton: {
    width: 130,
    height: 123,
    padding: 15,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30 / 2,
    color: '#000000',
  },
  textButtonWrapper: {
    paddingTop: 10,
  },
});
