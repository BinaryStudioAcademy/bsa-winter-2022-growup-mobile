import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppRoute } from '../../common/enums/navigation';
import HomeScreen from '../../screens/Home';
import ExploreScreen from '../../screens/Explore';
import OpportunitiesScreen from '../../screens/Opportunities';
import OKRScreen from '../../screens/OKR';
import ProfileScreen from '../../screens/Profile';
import styles from './styles';
import { AppColors } from '../../common/enums/colors/colors';

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName={AppRoute.HOME}
      barStyle={styles.barStyle}
      inactiveColor={AppColors.NAVIGATION_SECONDARY}
    >
      <Tab.Screen
        name={AppRoute.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.OPPORTUNITIES}
        component={OpportunitiesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shield-search"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.OKR}
        component={OKRScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="radar" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
