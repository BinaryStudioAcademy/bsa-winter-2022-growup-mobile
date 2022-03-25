import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute, HeadingLevel } from 'src/common/enums';
import { Heading, OpportunityCard } from 'src/components';
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
    <SafeAreaView>
      <FlatList
        data={opportunities ?? []}
        style={styles.screen}
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
