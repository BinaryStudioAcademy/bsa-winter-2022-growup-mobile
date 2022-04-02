import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import { IOpportunity } from 'src/common/types';
import { OpportunityCard } from 'src/components';
import useStyles from '../../styles';

type OpportunitiesListProps = {
  data: IOpportunity[];
  loading: boolean;
  onReload: () => void;
  onDetails: (id: string) => void;
};

const OpportunitiesList: React.FC<OpportunitiesListProps> = ({
  data,
  loading,
  onReload,
  onDetails,
}) => {
  const styles = useStyles();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>
          <OpportunityCard
            opportunity={item}
            onDetails={() => onDetails(item.id)}
          />
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onReload} />
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OpportunitiesList;
