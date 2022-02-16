import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MenteeHome } from './components';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <MenteeHome />
    </SafeAreaView>
  );
};

export default HomeScreen;
