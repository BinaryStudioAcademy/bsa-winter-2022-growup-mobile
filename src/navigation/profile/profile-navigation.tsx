import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AddEducationScreen,
  CreateSkillScreen,
  ProfileScreen,
} from 'src/screens';
import { ProfileRoute } from 'src/common/enums';

const ProfileStack = createNativeStackNavigator();

const ProfileNavigation: React.FC = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={ProfileRoute.PROFILE_ROOT}
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen
        name={ProfileRoute.PROFILE_ROOT}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name={ProfileRoute.CREATE_SKILL}
        component={CreateSkillScreen}
      />
      <ProfileStack.Screen
        name={ProfileRoute.ADD_EDUCATION}
        component={AddEducationScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
