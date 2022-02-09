import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Text from 'src/components/text';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IHomeScreenProps = Record<string, any>;

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
