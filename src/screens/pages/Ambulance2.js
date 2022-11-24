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
              <Text style={styles.textTitle}>
                Layanan Ambulan Rumah Sakit Siloam
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Letkol
                  Pol. H.M. Asnawi Arbain No.23, Damai, Kec. Balikpapan Kota,
                  Kota Balikpapan, Kalimantan Timur 76114
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('1500911')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Unit Ambulan Medik RSKD Balikpapan
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>No. 656, Jl.
                  MT Haryono No.656, Batu Ampar, Kec. Balikpapan Utara, Kota
                  Balikpapan, Kalimantan Timur 76114
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('08115666118')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>Gedung MCU RS Pertamina</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Prapatan,
                  Balikpapan Kota, Balikpapan City, Kalimantan Timur
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542734020')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Rumah Sakit Dr. Kanujoso Djatiwibowo
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. MT
                  Haryono No.656, Batu Ampar, Kec. Balikpapan Utara, Kota
                  Balikpapan, Kalimantan Timur 76115
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542873901')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Rumah Sakit Pertamina Balikpapan (RSPB)
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Jenderal
                  Sudirman No.1, Prapatan, Kec. Balikpapan Kota, Kota
                  Balikpapan, Kalimantan Timur 76111
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542734020')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>RSUD Beriman Balikpapan</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Mayjend
                  Sutoyo, Klandasan Ilir, Kec. Balikpapan Kota, Kota Balikpapan,
                  Kalimantan Timur 76113
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542792022')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>RS Medika Utama Manggar</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl.
                  Mulawarman No.24, Manggar Baru, Kec. Balikpapan Tim., Kota
                  Balikpapan, Kalimantan Timur 76116
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('05428524770')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>Balikpapan Baru Hospital</Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Moh. T.
                  Haryono, Komp. Balikpapan Baru Bl A/3A No.7-9, Damai, Kec.
                  Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76114
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542877330')} />
            </View>
          </View>
          <View style={styles.textTitleContainer}>
            {/* {text} */}
            <View style={styles.textTitleWrapper}>
              <Text style={styles.textTitle}>
                Rumah Sakit Bhayangkara Balikpapan
              </Text>
              <View style={styles.addressWrapper}>
                <Text style={styles.address}>
                  <Text style={styles.addressTitle}>Address: </Text>Jl. Jenderal
                  Sudirman No.14, Klandasan Ilir, Kecamatan Balikpapan Selatan,
                  Kota Balikpapan, Kalimantan Timur 76114
                </Text>
              </View>
            </View>
            {/* {butoon} */}
            <View style={styles.buttonWrapper}>
              <ButtonAnswer onpress={() => Call('0542421261')} />
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
    backgroundColor: '#990033',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
