import React, { useState } from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';
import addActions from './add-actions';
import styles from './styles';

type IProfileScreenProps = Record<string, never>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);

  /*
  const dispatch = useAppDispatch();

  const addFunctions: Record<string, () => void> = {
    skill: () => ...,
    location: () => ...,
    education: () => ...,
    language: () => ...,
    careerPoint: () => ...,
    interest: () => ...,
  };
  */

  const handleItemPress = (name?: string) => {
    if (!name) {
      return;
    }

    // addFunctions[name]();
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
