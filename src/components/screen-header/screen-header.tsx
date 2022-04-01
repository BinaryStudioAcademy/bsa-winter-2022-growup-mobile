import React from 'react';
import { View } from 'react-native';

import { HeadingLevel } from 'src/common/enums';
import { Heading } from 'src/components';
import useStyles from './styles';

type ScreenHeaderProps = {
  children: string;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <View style={styles.header}>
      <Heading level={HeadingLevel.H5}>{children}</Heading>
    </View>
  );
};

export default ScreenHeader;
