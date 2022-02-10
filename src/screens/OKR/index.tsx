import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IOKRScreenProps = Record<string, any>;

const OKRScreen: React.FC<IOKRScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>OKR screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default OKRScreen;
