import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

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
