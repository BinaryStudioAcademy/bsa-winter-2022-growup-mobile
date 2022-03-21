import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { actions } from 'src/store/quiz';
import styles from './styles';

const QuizScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { quizQuestions } = useAppSelector(state => state.quiz);
  const pagerRef = useRef<PagerView | null>(null);

  useEffect(() => {
    dispatch(actions.loadQuizQuestions());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.screen}>
      <PagerView style={styles.content} initialPage={0} ref={pagerRef}>
        {quizQuestions.map(item => {
          return (
            <View collapsable={false} key={item.id}>
              <Text>{item.question}</Text>
            </View>
          );
        })}
      </PagerView>
    </SafeAreaView>
  );
};

export default QuizScreen;
