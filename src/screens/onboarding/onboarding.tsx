import React, { useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import StepIndicator from 'react-native-step-indicator';

import { MainButton } from 'src/components';
import {
  EducationContent,
  ExperienceContent,
  InterestingContent,
  UserContent,
} from './components';
import styles from './styles';

type IOnboardingScreenProps = Record<string, never>;

const OnboardingScreen: React.FC<IOnboardingScreenProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <StepIndicator currentPosition={currentStep} stepCount={4} />
        <PagerView
          style={styles.content}
          initialPage={0}
          onPageScroll={e => setCurrentStep(e.nativeEvent.position)}
        >
          <View key="1">
            <UserContent />
          </View>
          <View key="2">
            <ExperienceContent />
          </View>
          <View key="3">
            <EducationContent />
          </View>
          <View key="4">
            <InterestingContent />
          </View>
        </PagerView>
        <View style={styles.buttonContainer}>
          <MainButton mode="contained">Next Step</MainButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
