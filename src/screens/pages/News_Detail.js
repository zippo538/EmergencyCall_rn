import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext, TextContext} from '../../Context/GlobalState';

const NewsDetail = ({route}) => {
  const {width, height} = Dimensions.get('window');
  const [Dark, setDark] = useContext(ThemeContext);
  return (
    <>
      {console.log(route.params.data.urlToImage)}
      <ScrollView
        style={[styles.container, {backgroundColor: Dark ? 'black' : 'white'}]}>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, {color: Dark ? 'white' : 'black'}]}>
              {route.params.data.title}
            </Text>
            <Image
              styles={{width: width, height: width}}
              source={{uri: route.params.data.urlToImage}}
            />
            <View
              style={{width: width, height: width, backgroundColor: 'coral'}}
            />
            <Text style={[styles.desc, {color: Dark ? 'white' : 'black'}]}>
              {route.params.data.description}
            </Text>
            <Text style={[styles.contenct, {color: Dark ? 'white' : 'black'}]}>
              {route.params.data.content}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  titleWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {
    paddingTop: StatusBar.currentHeight,
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 5,
  },
  desc: {color: 'black', fontSize: 12, paddingVertical: 5, marginHorizontal: 5},
  contenct: {color: 'black', marginHorizontal: 5},
  container: {flex: 1},
  image: {
    width: 100,
    height: 100,
  },
});
