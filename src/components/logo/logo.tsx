import React from 'react';
import { Image } from 'react-native';

import { useAsset } from 'src/hooks';
import useStyles from './styles';

const Logo: React.FC = () => {
  const styles = useStyles();
  const logo = useAsset('images/Logo');

  return <Image source={logo} style={styles.logo} />;
};

export default Logo;
