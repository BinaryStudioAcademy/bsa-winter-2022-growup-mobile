import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { RootState } from 'src/common/types';
import { Text } from 'src/components';
import { useAppDispatch } from 'src/hooks';
import { opportunityActions } from 'src/store/actions';

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

  return (
    <SafeAreaView>
      <View>
        <Text>Opportunities screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default OpportunitiesScreen;
