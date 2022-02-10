import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { AppRoute } from 'src/common/enums/navigation';
import { AppColor } from 'src/common/enums';
import {
  AccountIcon,
  CompassIcon,
  HomeIcon,
  RadarIcon,
  ShieldSearchIcon,
} from 'src/components';
import styles from './styles';
import {
  ExploreScreen,
  HomeScreen,
  OKRScreen,
  OpportunitiesScreen,
  ProfileScreen,
} from 'src/screens';

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName={AppRoute.HOME}
      barStyle={styles.barStyle}
      inactiveColor={AppColor.NAVIGATION_SECONDARY}
    >
      <Tab.Screen
        name={AppRoute.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name={AppRoute.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => <CompassIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name={AppRoute.OPPORTUNITIES}
        component={OpportunitiesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <ShieldSearchIcon color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.OKR}
        component={OKRScreen}
        options={{
          tabBarIcon: ({ color }) => <RadarIcon color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name={AppRoute.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <AccountIcon color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
