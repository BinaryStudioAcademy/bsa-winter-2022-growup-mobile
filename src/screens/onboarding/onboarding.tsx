import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepIndicator from 'react-native-step-indicator';

import { Input, MainButton } from 'src/components';
import styles from './styles';

type IOnboardingScreenProps = Record<string, never>;

const OnboardingScreen: React.FC<IOnboardingScreenProps> = () => {
  const [currentStep] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <StepIndicator currentPosition={currentStep} />
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
