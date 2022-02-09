import React from 'react';
import { TextStyle } from 'react-native';
import { Text as TextPaper } from 'react-native-paper';
import { TextAppearance } from '../../common/enums';
import styles from './styles';

type ITextProps = {
  children: string;
  appearance?: TextAppearance;
  style?: TextStyle;
};

const Text: React.FC<ITextProps> = ({
  children,
  appearance = TextAppearance.BODY,
  style,
}) => {
  return (
    <TextPaper style={{ ...styles[appearance], ...style }}>
      {children}
    </TextPaper>
  );
};

export default Text;
