import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AddExperienceScreen,
  AddEducationScreen,
  CreateSkillScreen,
  ProfileScreen,
} from 'src/screens';
import { ProfileRoute } from 'src/common/enums';
import { ProfileStackParamList } from 'src/common/types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

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
        name={ProfileRoute.ADD_CAREER_EXPERIENCE}
        component={AddExperienceScreen}
      />
      <ProfileStack.Screen
        name={ProfileRoute.ADD_EDUCATION}
        component={AddEducationScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigation;
