import React from 'react';
import { ScrollView, View } from 'react-native';

import { AvatarHeader } from '..';

const MenteeHome: React.FC = () => {
  return (
    <View>
      <ScrollView>
        <AvatarHeader>Looking for some jobs?</AvatarHeader>
      </ScrollView>
    </View>
  );
};

export default MenteeHome;
