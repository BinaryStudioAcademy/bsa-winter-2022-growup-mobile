import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView, { PagerViewOnPageScrollEvent } from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonMode } from 'src/common/enums';
import { IUserInfo } from 'src/common/types';
import { MainButton } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { onboardingActions } from 'src/store/onboarding';
import { userInfoValidationSchema } from 'src/validation-schemas';

import {
  EducationContent,
  ExperienceContent,
  InterestingContent,
  StepDots,
  UserContent,
} from './components';
import { defaultAddUserInfoPayload } from './components/step-content/common';

import useStyles from './styles';

const ONBOARDING_DOTS_COUNT = 4;
const LAST_STEP_INDEX = ONBOARDING_DOTS_COUNT - 1;

const OnboardingScreen: React.FC = () => {
  const styles = useStyles();

  const [currentStep, setCurrentStep] = useState(0);
  const pagerRef = useRef<PagerView | null>(null);
  const dispatch = useAppDispatch();
  const { userData, avatar } = useAppSelector(state => state.onboarding);

  const changeCurrentPage = () => {
    pagerRef.current?.setPage(currentStep + 1);
  };

  const handlePageScroll = useCallback((e: PagerViewOnPageScrollEvent) => {
    setCurrentStep(e.nativeEvent.position);
  }, []);

  const handleComplete = () => {
    dispatch(onboardingActions.completeOnboarding(userData));
    if (avatar) {
      dispatch(onboardingActions.uploadUserAvatar(avatar));
    }
  };

  const handleSaveUserInfo = (userInfo: IUserInfo) => {
    dispatch(onboardingActions.saveUserInfo(userInfo));
    if (userInfo.avatar) {
      dispatch(onboardingActions.saveUserAvatar(userInfo.avatar));
    }
    changeCurrentPage();
  };

  const isLastStep = currentStep === LAST_STEP_INDEX;
  const isFirstStep = currentStep === 0;

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={defaultAddUserInfoPayload}
        validationSchema={userInfoValidationSchema}
        onSubmit={handleSaveUserInfo}
      >
        {({ values, isValid, handleSubmit }) => (
          <>
            <PagerView
              style={styles.content}
              initialPage={0}
              ref={pagerRef}
              onPageScroll={handlePageScroll}
              scrollEnabled={false}
            >
              <View collapsable={false} key="1">
                <UserContent values={values} />
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
              <StepDots
                activeIndex={currentStep}
                count={ONBOARDING_DOTS_COUNT}
              />
              {isLastStep ? (
                <MainButton
                  style={styles.completeButton}
                  mode={ButtonMode.CONTAINED}
                  onPress={handleComplete}
                >
                  Complete
                </MainButton>
              ) : (
                <MainButton
                  mode={ButtonMode.OUTLINED}
                  disabled={!isValid}
                  onPress={isFirstStep ? handleSubmit : changeCurrentPage}
                >
                  Next
                </MainButton>
              )}
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
