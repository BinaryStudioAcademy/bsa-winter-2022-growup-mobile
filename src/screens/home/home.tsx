import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';

type IHomeScreenProps = Record<string, never>;

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
