import {Linking, Alert, Platform} from 'react-native';
import call from 'react-native-phone-call';

const index = phone => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  const args = {
    number: phone,
    prompt: false,
    skipCanOpen: true,
  };
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (supported) {
        Alert.alert('Phone number is not available');
      } else {
        return call(args).catch(console.error);
      }
    })
    .catch(err => console.log(err));
};

export default index;
