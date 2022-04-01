import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import { IOkr } from 'src/common/types';
import { OKRCard } from '..';
import useStyles from './styles';

type OKRListProps = {
  data: IOkr[];
  loading: boolean;
  onReload: () => void;
};

const OKRList: React.FC<OKRListProps> = ({ data, loading, onReload }) => {
  const styles = useStyles();

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={styles.cardDivider} />}
      renderItem={({ item }) => <OKRCard okr={item} />}
      keyExtractor={({ id }) => id}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onReload} />
      }
    />
  );
};

export default OKRList;
