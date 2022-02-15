import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView, { PagerViewOnPageScrollEvent } from 'react-native-pager-view';
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

const numberOfDots = 4;
const lastStepIndex = 3;

const OnboardingScreen: React.FC<IOnboardingScreenProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const pagerRef = useRef<PagerView | null>(null);

  const changeCurrentPage = () => {
    pagerRef.current?.setPage(currentStep + 1);
  };

  const handlePageScroll = useCallback(
    (e: PagerViewOnPageScrollEvent) => {
      setCurrentStep(e.nativeEvent.position);
    },
    [setCurrentStep]
  );

  const isLastStep = currentStep === lastStepIndex;

  return (
    <SafeAreaView style={styles.screen}>
      <PagerView
        style={styles.content}
        initialPage={0}
        ref={pagerRef}
        onPageScroll={handlePageScroll}
      >
        <View collapsable={false} key="1">
          <UserContent />
        </View>
        <View collapsable={false} key="2">
          <ExperienceContent />
        </View>
        <View collapsable={false} key="3">
          <EducationContent />
        </View>
        <View collapsable={false} key="4">
          <InterestingContent />
        </View>
      </PagerView>
      <View style={styles.buttonContainer}>
        <StepDots activeIndex={currentStep} count={numberOfDots} />
        {isLastStep ? (
          <MainButton
            style={styles.completeButton}
            mode={ButtonMode.CONTAINED}
            onPress={changeCurrentPage}
          >
            Complete
          </MainButton>
        ) : (
          <MainButton mode={ButtonMode.OUTLINED} onPress={changeCurrentPage}>
            Next
          </MainButton>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
