import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {ThemeContext, TextContext} from '../../Context/GlobalState';

const News = ({navigation}) => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          sources: 'bbc-news',
          apiKey: 'cc4b9646341543ecbd361ac9fe62c39c',
        },
        //header
      });
      setData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const [Dark, setDark] = useContext(ThemeContext);
  return (
    <>
      <ScrollView style={{flex: 1}}>
        {data &&
          data.map((item, i) => {
            return (
              <View style={{backgroundColor: Dark ? 'black' : 'white'}}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() =>
                    navigation.navigate('NewsDetail', {data: item})
                  }>
                  <View
                    style={[
                      styles.container,
                      {backgroundColor: Dark ? 'black' : 'white'},
                    ]}
                    key={i}>
                    <Image
                      style={styles.image}
                      source={{uri: item.urlToImage}}
                    />
                    <View style={styles.wrapperText}>
                      <Text
                        style={[
                          styles.title,
                          {color: Dark ? 'white' : 'black'},
                        ]}>
                        {item.title}
                      </Text>
                      <Text style={styles.author}>{item.author}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  title: {fontWeight: 'bold', fontSize: 15},
  author: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  wrapperText: {
    justifyContent: 'space-between',
    margin: 5,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});
