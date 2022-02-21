import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileRoute } from 'src/common/enums';
import { Text } from 'src/components';
import addActions from './add-actions';
import styles from './styles';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);

  const addFunctions: Record<string, () => void> = {
    skill: () => {
      navigation.navigate({
        name: ProfileRoute.CREATE_SKILL as never,
        params: {} as never,
      });
    },
    location: () => {
      /* TODO */
    },
    education: () => {
      /* TODO */
    },
    language: () => {
      /* TODO */
    },
    careerPoint: () => {
      /* TODO */
    },
    interest: () => {
      /* TODO */
    },
  };

  const handleItemPress = (name: string) => {
    addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  return (
    <SafeAreaView style={styles.fullHeight}>
      <View style={styles.fullHeight}>
        <Text>Profile screen!</Text>
        <FAB.Group
          open={addMenuOpen}
          visible={true}
          icon="plus"
          actions={addActions(handleItemPress)}
          onStateChange={handleMenuStateChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
