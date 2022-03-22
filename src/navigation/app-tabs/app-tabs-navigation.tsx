import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { EventArg } from '@react-navigation/native';

import { AppColor, AppRoute } from 'src/common/enums';
import {
  AccountIcon,
  CompassIcon,
  HomeIcon,
  RadarIcon,
  ShieldSearchIcon,
} from 'src/components';
import {
  ExploreScreen,
  MenteeHomeScreen,
  OKRScreen,
  OpportunitiesScreen,
} from 'src/screens';
import { AppTabsParamList } from 'src/common/types';
import { useAppSelector } from 'src/hooks';
import { showInfoToast } from 'src/helpers/notifications';
import { COMPLETE_QUIZ } from 'src/common/constants';
import ProfileNavigation from '../profile/profile-navigation';
import styles from './styles';

const Tab = createMaterialBottomTabNavigator<AppTabsParamList>();

const AppTabsNavigation = () => {
  const { user } = useAppSelector(state => state.auth);

  const navigationEvent = {
    tabPress: (e: EventArg<'tabPress', true, undefined>) => {
      if (!user?.isCompleteTest) {
        e.preventDefault();
        showInfoToast(COMPLETE_QUIZ);
      }
    },
  };

  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName={user?.isCompleteTest ? AppRoute.HOME : AppRoute.PROFILE}
      barStyle={styles.barStyle}
      inactiveColor={AppColor.NAVIGATION_SECONDARY}
    >
      <Tab.Screen
        name={AppRoute.HOME}
        component={MenteeHomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={25} />,
        }}
        listeners={navigationEvent}
      />
      <Tab.Screen
        name={AppRoute.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => <CompassIcon color={color} size={25} />,
        }}
        listeners={navigationEvent}
      />
      <Tab.Screen
        name={AppRoute.OPPORTUNITIES}
        component={OpportunitiesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ShieldSearchIcon color={color} size={25} />
          ),
        }}
        listeners={navigationEvent}
      />
      <Tab.Screen
        name={AppRoute.OKR}
        component={OKRScreen}
        options={{
          tabBarIcon: ({ color }) => <RadarIcon color={color} size={25} />,
        }}
        listeners={navigationEvent}
      />
      <Tab.Screen
        name={AppRoute.PROFILE}
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color }) => <AccountIcon color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabsNavigation;
