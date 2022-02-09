import React from 'react';
import { TextStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { HeadingLevel } from '../../common/enums';
import styles from './styles';

type IHeadingProps = {
  children: string;
  level: HeadingLevel;
  style?: TextStyle;
};

const Heading: React.FC<IHeadingProps> = ({ children, level, style }) => {
  return <Text style={{ ...styles[level], ...style }}>{children}</Text>;
};

export default Heading;
