/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import react from '../../assets/images/react.png';

const FlexBox = () => {
  const [number, setNumber] = useState(300);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setNumber(1000);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [number]);
  return (
    <View>
      <View style={styles.Wrapper}>
        <Text style={styles.text}>React Native</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={react}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{marginStart: 10, fontWeight: 'bold'}}>React </Text>
            <Text style={{marginStart: 10}}>Native </Text>
            <Text style={{marginStart: 10}}>{number} </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 20}}>
        <View style={{backgroundColor: 'red', flex: 1, height: 100}} />
        <View style={{backgroundColor: 'green', flex: 1, height: 100}} />
        <View style={{backgroundColor: 'blue', flex: 1, height: 100}} />
        <View style={{backgroundColor: 'yellow', flex: 1, height: 100}} />
      </View>
    </View>
  );
};
export default FlexBox;

const styles = StyleSheet.create({
  Wrapper: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  },
  text: {margin: 20},
});
