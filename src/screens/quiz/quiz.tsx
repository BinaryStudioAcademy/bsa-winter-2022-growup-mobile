import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView, { PagerViewOnPageScrollEvent } from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonMode } from 'src/common/enums';
import { MainButton, Text } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { actions } from 'src/store/quiz';
import { QuizItem } from './components';
import styles from './styles';

const QuizScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { quizQuestions } = useAppSelector(state => state.quiz);
  const pagerRef = useRef<PagerView | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === quizQuestions.length - 1;

  const changeCurrentPage = () => {
    pagerRef.current?.setPage(currentStep + 1);
  };

  const handlePageScroll = useCallback((e: PagerViewOnPageScrollEvent) => {
    setCurrentStep(e.nativeEvent.position);
  }, []);

  useEffect(() => {
    dispatch(actions.loadQuizQuestions());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.screen}>
      <PagerView
        style={styles.content}
        initialPage={0}
        ref={pagerRef}
        onPageScroll={handlePageScroll}
        scrollEnabled={false}
      >
        {quizQuestions.map((item, index) => (
          <View collapsable={false} key={item.id} style={styles.quizItem}>
            <Text style={styles.questionCount}>
              Question {index + 1}/{quizQuestions.length}
            </Text>
            <QuizItem item={item} />
          </View>
        ))}
      </PagerView>
      {isLastStep ? (
        <MainButton
          style={styles.completeButton}
          mode={ButtonMode.CONTAINED}
          onPress={() => {
            console.log(quizQuestions);
          }}
        >
          Complete
        </MainButton>
      ) : (
        <MainButton mode={ButtonMode.OUTLINED} onPress={changeCurrentPage}>
          Next
        </MainButton>
      )}
    </SafeAreaView>
  );
};

export default QuizScreen;
