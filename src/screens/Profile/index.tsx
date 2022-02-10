import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IProfileScreenProps = Record<string, any>;

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
