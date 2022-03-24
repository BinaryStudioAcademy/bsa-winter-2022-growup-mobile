import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { AppRoute } from 'src/common/enums';
import { INotification } from 'src/common/types';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { notificationActions, opportunityActions } from 'src/store/actions';

import {
  Header,
  NotificationsSection,
  OpportunitiesSection,
} from './components';

import styles from './styles';

const MenteeHome: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { opportunities, opportunitiesLoading } = useAppSelector(
    state => state.opportunity
  );

  const notifications: INotification[] = [
    // TODO: useSelector
    {
      id: '1',
      text: 'You have been offered a new position!',
    },
    {
      id: '2',
      text: "You've learned everything to become a Fullstack JS Developer",
    },
  ];

  useEffect(() => {
    if (!opportunities && !opportunitiesLoading) {
      dispatch(opportunityActions.loadOpportunities());
    }
  }, [opportunitiesLoading, opportunities, dispatch]);

  const handleMarkRead = (id: string) => {
    dispatch(notificationActions.markNotificationRead(id));
  };

  const handleOpportunityDetails = (id: string) => {
    dispatch(opportunityActions.loadExpandedOpportunity(id))
      .unwrap()
      .then(() => navigation.navigate(AppRoute.OPPORTUNITY_DETAILS));
  };

  return (
    <View>
      <Header>Looking for some jobs?</Header>
      <ScrollView contentContainerStyle={styles.container}>
        <NotificationsSection
          notifications={notifications}
          onMarkRead={handleMarkRead}
        />
        <OpportunitiesSection
          opportunities={(opportunities ?? []).slice(0, 3)}
          onDetails={handleOpportunityDetails}
        />
      </ScrollView>
    </View>
  );
};

export default MenteeHome;
