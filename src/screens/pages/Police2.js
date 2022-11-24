import {Text, StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import React, {Component} from 'react';
import ButtonAnswer from '../../components/customButton/ButtonAnswer';
import Call from '../../components/CallFunction/communication';
export default class Ambulance2 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>Polresta Balikpapan</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Jenderal
                  Sudirman No.69, Balikpapan Selatan, Klandasan Ulu, Kec.
                  Balikpapan Kota, Kota Balikpapan, Kalimantan Timur
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542425000')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>Polsek Balikpapan Utara</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. S. Hatta
                  Km. 0.5, Muara Rapak, Balikpapan, Kota Balikpapan, Kalimantan
                  Timur 76124
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542422391')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>Polsek Balikpapan Barat</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Semoi
                  No.21, Marga Sari, Kec. Balikpapan Bar., Kota Balikpapan,
                  Kalimantan Timur 76132
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542422392')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>Polsek Balikpapan Selatan</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl.
                  Sepinggan Baru No.96, Sepinggan, Kecamatan Balikpapan Selatan,
                  Kota Balikpapan, Kalimantan Timur 76115
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542761400')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Satuan Lalu Lintas Polres Balikpapan
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Jenderal
                  Sudirman No.69, Klandasan Ulu, Kecamatan Balikpapan Selatan,
                  Kota Balikpapan, Kalimantan Timur
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542421134')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Polsek Kawasan Bandara Sepinggan Balikpapan
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Marsma
                  R. Iswahyudi, Sepinggan, Kecamatan Balikpapan Selatan, Kota
                  Balikpapan, Kalimantan Timur 76115
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542766828')} />
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
    backgroundColor: '#26619c',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
