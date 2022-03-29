import React, { useEffect, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PREVIEW_CARDS_COUNT } from 'src/common/constants';
import { AppRoute } from 'src/common/enums';
import { INotification } from 'src/common/types';
import { NothingHere } from 'src/components';
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

  const { opportunities, opportunitiesLoading } = useAppSelector(
    state => state.opportunity
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

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      dispatch(opportunityActions.loadOpportunities());
    }
  }, [opportunitiesLoading, opportunities, dispatch]);

  const previewOpportunities = useMemo(
    () => (opportunities ?? []).slice(0, PREVIEW_CARDS_COUNT),
    [opportunities]
  );

  const showNothingHere = useMemo(
    () =>
      Boolean(!notifications.length) && Boolean(!previewOpportunities.length),
    [notifications, previewOpportunities]
  );

  const handleMarkRead = (id: string) => {
    dispatch(notificationActions.markNotificationRead(id));
  };

  const handleOpportunityDetails = (id: string) => {
    dispatch(opportunityActions.loadExpandedOpportunity(id))
      .unwrap()
      .then(() => navigation.navigate(AppRoute.OPPORTUNITY_DETAILS));
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header>Looking for some jobs?</Header>
        <ScrollView style={styles.scroller}>
          <NotificationsSection
            notifications={notifications}
            onMarkRead={handleMarkRead}
          />
          <OpportunitiesSection
            opportunities={previewOpportunities}
            onDetails={handleOpportunityDetails}
          />
          {showNothingHere && (
            <NothingHere>
              You have no notifications and no opportunities here...
            </NothingHere>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MenteeHome;
