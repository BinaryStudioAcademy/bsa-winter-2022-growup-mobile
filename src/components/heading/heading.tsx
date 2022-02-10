import React from 'react';
import { Text } from 'react-native-paper';

import { HeadingLevel } from 'src/common/enums';
import styles from './styles';

type HeadingProps = React.ComponentPropsWithoutRef<typeof Text> & {
  level: HeadingLevel;
};

const Heading: React.FC<HeadingProps> = ({
  children,
  level = HeadingLevel.H6,
  style,
  ...textProps
}) => {
  return (
    <Text style={[styles[level], style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Heading;
