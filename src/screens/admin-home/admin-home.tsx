import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'src/components';
import { Header } from './components';

const AdminHomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Admin page</Text>
    </SafeAreaView>
  );
};

export default AdminHomeScreen;
