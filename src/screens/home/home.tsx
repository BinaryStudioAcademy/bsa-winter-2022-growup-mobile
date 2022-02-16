import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MenteeHome } from './components';

type IHomeScreenProps = Record<string, never>;

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <MenteeHome />
    </SafeAreaView>
  );
};

export default HomeScreen;
