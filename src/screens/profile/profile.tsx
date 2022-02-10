import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';

type IProfileScreenProps = Record<string, never>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
