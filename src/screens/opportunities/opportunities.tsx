import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { RootState } from 'src/common/types';
import { HeadingLevel } from 'src/common/enums';
import { Heading, OpportunityCard } from 'src/components';
import { useAppDispatch } from 'src/hooks';
import { opportunityActions } from 'src/store/actions';
import styles from './styles';

const OpportunitiesScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { opportunitiesLoading, opportunities } = useSelector(
    (state: RootState) => state.opportunity
  );

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      dispatch(opportunityActions.loadOpportunities());
    }
  }, [opportunitiesLoading, opportunities, dispatch]);

  const showOpportunityDetails = (_id: string) => {
    /* TODO */
  };

  return (
    <SafeAreaView>
      <FlatList
        data={opportunities ?? []}
        style={styles.container}
        ListHeaderComponent={
          <Heading style={styles.header} level={HeadingLevel.H5}>
            Opportunities
          </Heading>
        }
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <OpportunityCard
              opportunity={item}
              onDetails={() => showOpportunityDetails(item.id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default OpportunitiesScreen;
