import React from 'react';
import { FlatList, View } from 'react-native';

import { IOkr } from 'src/common/types';
import { OKRCard } from '..';
import useStyles from './styles';

type OKRListProps = {
  data: IOkr[];
};

const OKRList: React.FC<OKRListProps> = ({ data }) => {
  const styles = useStyles();

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={styles.cardDivider} />}
      renderItem={({ item }) => <OKRCard okr={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default OKRList;
