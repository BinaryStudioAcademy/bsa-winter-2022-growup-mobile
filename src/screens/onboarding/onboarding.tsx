import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import PagerView, { PagerViewOnPageScrollEvent } from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppRoute, ButtonMode } from 'src/common/enums';
import { MainButton } from 'src/components';
import {
  EducationContent,
  ExperienceContent,
  InterestingContent,
  StepDots,
  UserContent,
} from './components';
import { OnboardingStackParamList } from 'src/common/types';
import styles from './styles';

type OnboardingScreenProps = NativeStackNavigationProp<
  OnboardingStackParamList,
  AppRoute.APP
>;

const ONBOARDING_DOTS_COUNT = 4;
const LAST_STEP_INDEX = ONBOARDING_DOTS_COUNT - 1;

const OnboardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const pagerRef = useRef<PagerView | null>(null);
  const navigation = useNavigation<OnboardingScreenProps>();

  const changeCurrentPage = () => {
    pagerRef.current?.setPage(currentStep + 1);
  };

  const handlePageScroll = useCallback((e: PagerViewOnPageScrollEvent) => {
    setCurrentStep(e.nativeEvent.position);
  }, []);

  const handleComplete = () => {
    navigation.replace(AppRoute.APP);
  };

  const isLastStep = currentStep === LAST_STEP_INDEX;

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
        <StepDots activeIndex={currentStep} count={ONBOARDING_DOTS_COUNT} />
        {isLastStep ? (
          <MainButton
            style={styles.completeButton}
            mode={ButtonMode.CONTAINED}
            onPress={handleComplete}
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
