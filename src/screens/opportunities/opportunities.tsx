import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute } from 'src/common/enums';
import { EmptyListMessage } from 'src/components';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { opportunityActions } from 'src/store/actions';
import { OpportunitiesList } from './components';
import useStyles from './styles';

const OpportunitiesScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { opportunitiesLoading, opportunities } = useAppSelector(
    state => state.opportunity
  );

  const loadOpportunities = useCallback(() => {
    dispatch(opportunityActions.loadOpportunities());
  }, [dispatch]);

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      loadOpportunities();
    }
  }, [opportunitiesLoading, opportunities, loadOpportunities]);

  const showOpportunityDetails = (id: string) => {
    dispatch(opportunityActions.loadExpandedOpportunity(id))
      .unwrap()
      .then(() => navigation.navigate(AppRoute.OPPORTUNITY_DETAILS));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Appbar.Header>
        <Appbar.Content title="Opportunities" />
      </Appbar.Header>
      <View style={styles.screen}>
        <OpportunitiesList
          data={opportunities ?? []}
          loading={opportunitiesLoading}
          onReload={loadOpportunities}
          onDetails={showOpportunityDetails}
        />
        {!opportunities?.length && (
          <EmptyListMessage>No opportunities for you.</EmptyListMessage>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OpportunitiesScreen;
