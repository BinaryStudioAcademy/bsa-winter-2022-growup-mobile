const _fontConfig = {
  default: {
    regular: {
      fontFamily: 'NunitoSans-Regular',
    },
    light: {
      fontFamily: 'NunitoSans-Light',
    },
    medium: {
      fontFamily: 'NunitoSans-SemiBold',
    },
    thin: {
      fontFamily: 'NunitoSans-Light',
    },
    semiBold: {
      fontFamily: 'NunitoSans-SemiBold',
    },
    bold: {
      fontFamily: 'NunitoSans-Bold',
    },
  },
};

const fontConfig = {
  ios: _fontConfig.default,
  android: _fontConfig.default,
  web: _fontConfig.default,
  macos: _fontConfig.default,
  windows: _fontConfig.default,
  native: _fontConfig.default,
  default: _fontConfig.default,
};

export default fontConfig;
