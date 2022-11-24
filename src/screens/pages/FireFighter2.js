import {Text, StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import React, {Component} from 'react';
import ButtonAnswer from '../../components/customButton/ButtonAnswer';
import Call from '../../components/CallFunction/communication';
export default class FireFighter2 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Pemadam Kebakaran Wilayah Balikpapan Kota
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Gunung
                  Samarinda, Balikpapan Utara, Balikpapan City, East Kalimantan
                  76124
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('05428504191')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Pemadam Kebarakan Balikpapan Tengah
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Depan gajah
                  mada Jl. Mayjend Sutoyo, Klandasan Ilir, Kec. Balikpapan Kota,
                  Kota Balikpapan, Kalimantan Timur 76113
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542791941')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Pemadam Kebakaran, UPTPBD Wilayah Timur
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Sepinggan,
                  Balikpapan Selatan, Balikpapan City, East Kalimantan 76115
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542743337')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Badan Penanggulangan Bencana Daerah Kota Balikpapan
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jalan Ruhui
                  Rahayu I No.12, Sepinggan, Balikpapan Selatan, Sepinggan,
                  Balikpapan, Kota Balikpapan, Kalimantan Timur 76115
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542874095')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Badan Penanggulangan Bencana Dan Kebakaran Pemerintah Kota
                Balikpapan
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Adil
                  Makmur No.52, Baru Ilir, Kec. Balikpapan Barat, Kota
                  Balikpapan, Kalimantan Timur 76123
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542731606')} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    flex: 2,
    paddingTop: 30,
  },
  textDesc: {
    fontSize: 15,
    color: 'white',
  },
  textDescWrapper: {
    paddingStart: 20,
  },
  textTitleContainer: {
    flexDirection: 'row',
    padding: 30,
    paddingTop: 30,
  },
  textTitleWrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 8,
  },
  textTitle: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'InterBlackItalic',
  },
  addressWrapper: {
    paddingTop: 5,
  },
  addressTitle: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    fontWeight: '300',
  },
  address: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
  },
  container: {
    backgroundColor: '#800000',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
