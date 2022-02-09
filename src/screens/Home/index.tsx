import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IHomeScreenProps = Record<string, any>;

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello there!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
