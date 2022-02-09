import React from 'react';
import { TextStyle } from 'react-native';
import { Caption } from 'react-native-paper';
import { TextType } from '../../common/enums';
import styles from './styles';

type ITextProps = {
  children: JSX.Element;
  type: TextType;
  style: TextStyle;
};

const Text: React.FC<ITextProps> = ({ children, type, style }) => {
  return (
    <Caption style={{ ...styles.global, ...styles[type], ...style }}>
      {children}
    </Caption>
  );
};

export default Text;
