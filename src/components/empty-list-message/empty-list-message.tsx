import React from 'react';
import { HeadingLevel } from 'src/common/enums';
import { Heading } from '..';
import useStyles from './styles';

type EmptyListMessageProps = {
  children: string;
};

const EmptyListMessage: React.FC<EmptyListMessageProps> = ({
  children: text,
}) => {
  const styles = useStyles();

  return (
    <Heading level={HeadingLevel.H6} style={styles.text}>
      {text}
    </Heading>
  );
};

export default EmptyListMessage;
