import React from 'react';
import { HeadingLevel } from 'src/common/enums';
import { Heading } from '..';
import useStyles from './styles';

type NothingHereProps = {
  children: string;
};

const NothingHere: React.FC<NothingHereProps> = ({ children: text }) => {
  const styles = useStyles();

  return (
    <Heading level={HeadingLevel.H6} style={styles.text}>
      {text}
    </Heading>
  );
};

export default NothingHere;
