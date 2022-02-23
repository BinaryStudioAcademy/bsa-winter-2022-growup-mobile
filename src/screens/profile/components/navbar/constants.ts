import { SCREEN_WIDTH } from 'src/common/constants';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const NAVBAR_BUTTON_WIDTH = Math.ceil(
  (SCREEN_WIDTH - DEFAULT_SCREEN_PADDING * 2) / 3
);

export { NAVBAR_BUTTON_WIDTH };
