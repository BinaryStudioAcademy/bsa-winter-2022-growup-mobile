import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_MIN_DIMENSION = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);

export { SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_MIN_DIMENSION };
