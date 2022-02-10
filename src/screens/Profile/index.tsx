import React, { useState } from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import addActions from './add-actions';
import styles from './styles';

const ProfileScreen: React.FC = () => {
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

  return (
    <SafeAreaView style={styles.fullHeight}>
      <View style={styles.fullHeight}>
        <FAB.Group
          open={addMenuOpen}
          visible={true}
          icon="plus"
          actions={addActions(handleItemPress)}
          onStateChange={({ open }) => setAddMenuOpen(open)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
