import Toast from 'react-native-simple-toast';

function notify(text: string) {
  Toast.show(text, Toast.LONG);
}

export { notify };
