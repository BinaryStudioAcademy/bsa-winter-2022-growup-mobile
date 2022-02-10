import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IExploreScreenProps = Record<string, any>;

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
