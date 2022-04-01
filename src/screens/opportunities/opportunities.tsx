import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute } from 'src/common/enums';
import { EmptyListMessage, OpportunityCard } from 'src/components';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { opportunityActions } from 'src/store/actions';
import useStyles from './styles';

const OpportunitiesScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { opportunitiesLoading, opportunities } = useAppSelector(
    state => state.opportunity
  );

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      dispatch(opportunityActions.loadOpportunities());
    }
  }, [opportunitiesLoading, opportunities, dispatch]);

  const showOpportunityDetails = (id: string) => {
    dispatch(opportunityActions.loadExpandedOpportunity(id))
      .unwrap()
      .then(() => navigation.navigate(AppRoute.OPPORTUNITY_DETAILS));
  };

  return (
    <SafeAreaView style={styles.screen}>
      {!opportunities?.length && (
        <EmptyListMessage>No opportunities for you.</EmptyListMessage>
      )}
      <FlatList
        data={opportunities ?? []}
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
