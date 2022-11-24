import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Story from './story';
import image1 from '../../assets/images/react.png';

class index extends Component {
  render() {
    return (
      <View style={styles.wrapperContent}>
        <Text style={styles.text}>Instagram Story</Text>
        <ScrollView horizontal>
          <View style={styles.wrapper}>
            <Story judul="gambar" gambar={image1} />
            <Story judul="gambar" gambar={image1} />
            <Story judul="gambar" gambar={image1} />
            <Story judul="gambar" gambar={image1} />
            <Story judul="gambar" gambar={image1} />
            <Story judul="gambar" gambar={image1} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row'},
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
  wrapperContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
