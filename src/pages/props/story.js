import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const story = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={props.gambar} />
        <Text style={styles.text}>{props.judul}</Text>
      </View>
    </View>
  );
};

export default story;

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  text: {fontSize: 15, paddingTop: 10, maxWidth: 55},
});
