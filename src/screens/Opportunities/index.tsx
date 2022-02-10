import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IOpportunitiesScreenProps = Record<string, any>;

const OpportunitiesScreen: React.FC<IOpportunitiesScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Opportunities screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default OpportunitiesScreen;
