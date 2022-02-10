import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';

type IExploreScreenProps = Record<string, never>;

const ExploreScreen: React.FC<IExploreScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Explore screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
