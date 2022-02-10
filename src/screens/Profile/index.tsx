import React from 'react';
import { View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColor } from 'src/common/enums/ui';
import addActions from './add-actions';
import styles from './styles';

const ProfileScreen: React.FC = () => {
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
        <FloatingAction
          actions={addActions}
          color={AppColor.PRIMARY}
          onPressItem={handleItemPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
