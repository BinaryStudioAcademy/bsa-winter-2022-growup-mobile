import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'src/components';
import { Header } from './components';
import useStyles from './styles';

const AdminHomeScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContent}>
        <Header />
      </View>
      <Text>Admin page</Text>
    </SafeAreaView>
  );
};

export default AdminHomeScreen;
