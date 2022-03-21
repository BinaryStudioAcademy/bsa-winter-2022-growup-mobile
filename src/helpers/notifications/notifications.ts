import Toast from 'react-native-toast-message';

function showInfoToast(text: string) {
  Toast.show({ type: 'info', text1: 'Information', text2: text });
}

function showSuccessToast(text: string) {
  Toast.show({ type: 'success', text1: 'Success!', text2: text });
}

function showErrorToast(text: string) {
  Toast.show({ type: 'error', text1: 'Error', text2: text });
}

export { showInfoToast, showSuccessToast, showErrorToast };
