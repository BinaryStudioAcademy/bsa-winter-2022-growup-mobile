import Toast from 'react-native-simple-toast';

function showToast(text: string) {
  Toast.show(text, Toast.LONG);
}

export { showToast };
