import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Input, MainButton } from 'src/components';
import styles from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IOnboardingScreenProps = Record<string, any>;

const OnboardingScreen: React.FC<IOnboardingScreenProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.inputContainer}>
          <Input label="First name" placeholder="Enter first name" />
          <Input label="Last name" placeholder="Enter last name" />
        </View>
        <View style={styles.buttonContainer}>
          <MainButton mode="contained">Next Step</MainButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
