import Toast from 'react-native-simple-toast';

function showInfoToast(text: string) {
  Toast.showWithGravity(text, Toast.SHORT, Toast.BOTTOM);
}

function showErrorToast(text: string) {
  Toast.showWithGravity(text, Toast.LONG, Toast.TOP);
}

export { showInfoToast, showErrorToast };
