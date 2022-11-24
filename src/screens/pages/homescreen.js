import React, {useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';
import ambulance from '../../assets/image/ambulance_logo.png';
import cop from '../../assets/image/Cop_logo.png';
import fireFighter from '../../assets/image/fire_fighter.png';
import imageCircle from '../../assets/image/image_circle.png';
import logo from '../../assets/image/Logo_Emergency_Call.png';
import ButtonCustom from '../../components/customButton/buttonCustom';
import TextTicker from 'react-native-text-ticker';
import {ThemeContext, TextContext} from '../../Context/GlobalState';
const Homescreen = ({navigation}) => {
  const [Dark, setDark] = useContext(ThemeContext);
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={[styles.container, {backgroundColor: Dark ? 'black' : 'white'}]}>
        <View style={styles.circleBackgroundPosition}>
          <View style={styles.circleBackgroundShape} />
        </View>
        <View style={styles.logoWrapper}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
            <Image style={styles.logo} source={logo} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textUpper1}>Selamat Datang di </Text>
          <Text style={styles.textUpper2}>Emergency Call</Text>
          <Text style={styles.textUpper2}>Balikpapan</Text>
          <View style={styles.chatContainer}>
            <View style={styles.circleImagePosition}>
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Image source={imageCircle} style={styles.circleImage} />
              </TouchableOpacity>
            </View>
            <View style={[styles.chatBox, styles.chatBoxWrap]}>
              <TextTicker
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                }}
                duration={5000}
                loop
                bounce
                bouncePadding={{left: 150}}
                scroll={false}
                repeatSpacer={50}
                marqueeDelay={1000}>
                Siapa yang Sedang Anda Butuhkan ?
              </TextTicker>
            </View>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <ButtonCustom
                judul="Policeman"
                gambar={cop}
                color={{backgroundColor: 'white'}}
                onpress={() => navigation.navigate('Police')}
                style={{flex: -1}}
              />
              <ButtonCustom
                judul="Ambulance"
                gambar={ambulance}
                color={{backgroundColor: 'white'}}
                onpress={() => navigation.navigate('Ambulance')}
                style={{flex: -1}}
              />
            </View>
            <View style={styles.buttonWrapper2}>
              <ButtonCustom
                judul="Fire Fighter"
                gambar={fireFighter}
                color={{backgroundColor: 'white'}}
                onpress={() => navigation.navigate('Firefighter')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  logoWrapper: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
  },
  logo: {
    width: 100,
    height: 90,
  },
  textChatBox: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImagePosition: {
    marginTop: 50,
    marginRight: 10,
  },
  circleImage: {
    width: 73 / 2,
    height: 73 / 2,
    borderRadius: 73 / 3,
    backgroundColor: 'pink',
  },
  chatBoxWrap: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBox: {
    width: 893 / 3,
    height: 73 / 1.8,
    borderRadius: 15,
    backgroundColor: 'black',
  },
  circleBackgroundPosition: {
    position: 'absolute',
    bottom: 350,
    right: -100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBackgroundShape: {
    width: 590,
    height: 590,
    borderRadius: 590 / 2,
    backgroundColor: '#FF0000',
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  boxContainer: {
    paddingTop: 57,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  buttonWrapper: {
    width: 950 / 3,
    height: 1000 / 3,
    borderRadius: 30,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#EEEEEE',
  },
  buttonWrapper2: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
  },

  textWrapper: {
    alignItems: 'flex-start',
    padding: 30,
    paddingTop: 100,
  },
  textUpper1: {
    paddingTop: 20,
    color: 'black',
    fontSize: 19,
    fontFamily: 'Roboto-Black',
  },
  textUpper2: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Roboto-Medium',
  },
});
