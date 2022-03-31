import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute, ButtonMode } from 'src/common/enums';
import { MainButton, Text } from 'src/components';
import { useAppNavigation } from 'src/hooks';
import { Header } from './components';
import useStyles from './styles';

const AdminHomeScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();

  const handleAddUser = () => {
    navigation.navigate(AppRoute.ADD_USER);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContent}>
        <Header />
      </View>
      <Text>Admin page</Text>
      <MainButton mode={ButtonMode.CONTAINED} onPress={handleAddUser}>
        Add User
      </MainButton>
    </SafeAreaView>
  );
};

export default AdminHomeScreen;
