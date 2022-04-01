import React, { useCallback, useEffect, useMemo } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PREVIEW_CARDS_COUNT } from 'src/common/constants';
import { AppRoute } from 'src/common/enums';
import { INotification } from 'src/common/types';
import { EmptyListMessage } from 'src/components';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { notificationActions, opportunityActions } from 'src/store/actions';

import {
  Header,
  NotificationsSection,
  OpportunitiesSection,
} from './components';

import useStyles from './styles';

const MenteeHome: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { opportunities, opportunitiesLoading, user } = useAppSelector(
    state => ({
      opportunities: state.opportunity.opportunities,
      opportunitiesLoading: state.opportunity.opportunitiesLoading,
      user: state.auth.user,
    })
  );

  const notifications: INotification[] = useMemo(
    // TODO: useSelector
    () => [
      {
        id: '1',
        text: 'You have been offered a new position!',
      },
      {
        id: '2',
        text: "You've learned everything to become a Fullstack JS Developer",
      },
    ],
    []
  );

  const loadOpportunities = useCallback(() => {
    dispatch(opportunityActions.loadOpportunities());
  }, [dispatch]);

  const loadList = useCallback(() => {
    loadOpportunities();
  }, [loadOpportunities]);

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      loadOpportunities();
    }
  }, [opportunitiesLoading, opportunities, loadOpportunities]);

  const previewOpportunities = useMemo(
    () => (opportunities ?? []).slice(0, PREVIEW_CARDS_COUNT),
    [opportunities]
  );

  const handleMarkRead = (id: string) => {
    dispatch(notificationActions.markNotificationRead(id));
  };

  const handleOpportunityDetails = (id: string) => {
    dispatch(opportunityActions.loadExpandedOpportunity(id))
      .unwrap()
      .then(() => navigation.navigate(AppRoute.OPPORTUNITY_DETAILS));
  };

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header avatarUrl={user.avatar}>Looking for some jobs?</Header>
        <View style={styles.scroller}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={opportunitiesLoading}
                onRefresh={loadList}
              />
            }
          >
            <NotificationsSection
              notifications={notifications}
              onMarkRead={handleMarkRead}
            />
            <OpportunitiesSection
              opportunities={previewOpportunities}
              onDetails={handleOpportunityDetails}
            />
            {!notifications.length && !previewOpportunities.length && (
              <EmptyListMessage>
                You have no notifications and no opportunities here...
              </EmptyListMessage>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenteeHome;
