import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavigatorAll from '../routes/NavigatorAll';
const Welcome = ({navigation}) => {
  const [count, isCounted] = useState();
  useEffect(() => {
    setTimeout(() => {
      isCounted(navigation.navigate(NavigatorAll));
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/Logo_Emergency_Call.png')}
        style={{width: 100, height: 100}}
      />
      <Text style={styles.text}>Emergency Call</Text>
      <ActivityIndicator size={'large'} color={'red'} style={{marginTop: 15}} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
});
