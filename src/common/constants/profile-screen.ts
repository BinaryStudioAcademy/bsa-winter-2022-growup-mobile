import { Dimensions } from 'react-native';

const PROFILE_NAVBAR_WIDTH = Dimensions.get('screen').width * 0.8;
const BUTTON_PROFILE_NAVBAR_WIDTH = Math.ceil(PROFILE_NAVBAR_WIDTH / 3);

export { PROFILE_NAVBAR_WIDTH, BUTTON_PROFILE_NAVBAR_WIDTH };
