import React from 'react';
import { FlatList, View } from 'react-native';

import { IOkr } from 'src/common/types';
import { OKRCard } from '..';
import styles from './styles';

type OKRListProps = {
  data: IOkr[];
};

const OKRList: React.FC<OKRListProps> = ({ data }) => {
  const renderOkr = ({ item }: { item: IOkr }) => (
    <View style={styles.cardWrapper}>
      <OKRCard okr={item} />
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={renderOkr}
      keyExtractor={({ id }) => id}
    />
  );
};

export default OKRList;
