/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import react from '../../assets/images/react.png';
class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('>> constructor');
    this.state = {
      number: 100,
    };
  }
  componentDidMount() {
    console.log('>>componen did mount');
    setTimeout(() => {
      this.setState({
        number: 400,
      });
    }, 2000);
  }
  componentDidUpdate() {
    console.log('>>componen did update');
  }
  render() {
    console.log('>> render');
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
              <Text style={{marginStart: 10}}>{this.state.number} </Text>
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
  }
}

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
