import React, { useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute } from 'src/common/enums';
import { EmptyListMessage } from 'src/components';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { opportunityActions } from 'src/store/actions';
import { OpportunitiesList } from './components';

const OpportunitiesScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { opportunitiesLoading, opportunities } = useAppSelector(
    state => state.opportunity
  );

  const reload = useCallback(() => {
    dispatch(opportunityActions.loadOpportunities());
  }, [dispatch]);

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      reload();
    }
  }, [opportunitiesLoading, opportunities, reload]);

  const showOpportunityDetails = (id: string) => {
    dispatch(opportunityActions.loadExpandedOpportunity(id))
      .unwrap()
      .then(() => navigation.navigate(AppRoute.OPPORTUNITY_DETAILS));
  };

  return (
    <SafeAreaView>
      <OpportunitiesList
        data={opportunities ?? []}
        loading={opportunitiesLoading}
        onReload={reload}
        onDetails={showOpportunityDetails}
      />
      {!opportunities?.length && (
        <EmptyListMessage>No opportunities for you.</EmptyListMessage>
      )}
    </SafeAreaView>
  );
};

export default OpportunitiesScreen;
