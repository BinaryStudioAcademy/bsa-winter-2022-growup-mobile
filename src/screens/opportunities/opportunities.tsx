import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';

type IOpportunitiesScreenProps = Record<string, never>;

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
