import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonMode } from 'src/common/enums';
import { MainButton } from 'src/components';
import {
  EducationContent,
  ExperienceContent,
  InterestingContent,
  StepDots,
  UserContent,
} from './components';
import styles from './styles';

type IOnboardingScreenProps = Record<string, never>;

const OnboardingScreen: React.FC<IOnboardingScreenProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const pagerRef = useRef<PagerView | null>(null);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <PagerView
          style={styles.content}
          initialPage={0}
          ref={pagerView => (pagerRef.current = pagerView)}
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
          <StepDots activeDot={currentStep} />
          {currentStep === 3 ? (
            <MainButton
              mode={ButtonMode.CONTAINED}
              onPress={() => pagerRef.current?.setPage(currentStep + 1)}
            >
              Complete
            </MainButton>
          ) : (
            <MainButton
              mode={ButtonMode.OUTLINED}
              onPress={() => pagerRef.current?.setPage(currentStep + 1)}
            >
              Next
            </MainButton>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
