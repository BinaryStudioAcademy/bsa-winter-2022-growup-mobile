import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

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
