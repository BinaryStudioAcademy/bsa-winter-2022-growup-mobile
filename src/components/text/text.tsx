import React from 'react';
import { Text as TextPaper } from 'react-native-paper';

import { TextAppearance } from 'src/common/enums';
import useStyles from './styles';

type TextProps = React.ComponentPropsWithoutRef<typeof TextPaper> & {
  appearance?: TextAppearance;
};

const Text: React.FC<TextProps> = ({
  children,
  appearance = TextAppearance.BODY,
  style,
  ...textProps
}) => {
  const styles = useStyles();

  return (
    <TextPaper style={[styles[appearance], style]} {...textProps}>
      {children}
    </TextPaper>
  );
};

export default Text;
