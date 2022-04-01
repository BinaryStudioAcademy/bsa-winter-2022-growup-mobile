import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute, ButtonMode } from 'src/common/enums';
import { MainButton } from 'src/components';
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
    <SafeAreaView>
      <View style={styles.headerContent}>
        <Header />
      </View>
      <View style={styles.screen}>
        <MainButton mode={ButtonMode.CONTAINED} onPress={handleAddUser}>
          Add User
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default AdminHomeScreen;
