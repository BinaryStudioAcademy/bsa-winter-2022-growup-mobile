import React, { useEffect, useMemo } from 'react';
import { Dialog, Portal } from 'react-native-paper';

import { QUIZ_MAX_SCORE, SCREEN_MIN_DIMENSION } from 'src/common/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Heading, RadarChart, Text } from 'src/components';
import { quizActions } from 'src/store/quiz';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { HeadingLevel, QuizCategoryName } from 'src/common/enums';
import useStyles from './styles';
import { QUIZ_TEXT } from './common';

const QuizResults: React.FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();

  const { quizResults, quizResultsLoading } = useAppSelector(
    state => state.quiz
  );

  const [visible, setVisible] = React.useState(false);

  const manageDialog = () => setVisible(current => !current);

  useEffect(() => {
    if (!quizResults && !quizResultsLoading) {
      dispatch(quizActions.loadQuizResults());
    }
  }, [dispatch, quizResults, quizResultsLoading]);

  const axes = useMemo(
    () =>
      quizResults?.map(result => {
        const name = result.quizCategory.name;

        return {
          score: result.score,
          name: `${name[0].toUpperCase()}${name.slice(1)}`,
        };
      }),
    [quizResults]
  );

  const maxScore = useMemo(() => {
    if (quizResults) {
      return Math.max(...quizResults.map(item => item.score));
    }
  }, [quizResults]);

  const personType = useMemo(() => {
    if (quizResults) {
      return quizResults.find(item => item.score === maxScore)?.quizCategory
        .name as QuizCategoryName;
    }
    return QuizCategoryName.ANALYTICAl;
  }, [quizResults, maxScore]);

  if (!axes) {
    return null;
  }

  return (
    <View>
      <Heading level={HeadingLevel.H5} style={styles.containerHeader}>
        Your type: {QUIZ_TEXT[personType].type}
      </Heading>
      <TouchableOpacity onPress={manageDialog} style={styles.button}>
        <Text>Learn more...</Text>
      </TouchableOpacity>
      <Portal>
        <Dialog visible={visible} onDismiss={manageDialog}>
          <Dialog.Content>
            <ScrollView>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  General
                </Heading>
                <Text>{QUIZ_TEXT[personType].general}</Text>
              </View>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  Relationship
                </Heading>
                <Text style={styles.boldText}>
                  In relationships with {QUIZ_TEXT[personType].type}:
                </Text>
                <Text>{QUIZ_TEXT[personType].relationship.text1}</Text>
                <Text>{QUIZ_TEXT[personType].relationship.text2}</Text>
                <Text>{QUIZ_TEXT[personType].relationship.text3}</Text>
                <Text>{QUIZ_TEXT[personType].relationship.text4}</Text>
                <Text>{QUIZ_TEXT[personType].relationship.text5}</Text>
              </View>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  Managing
                </Heading>
                <Text>{QUIZ_TEXT[personType].managing.text1}</Text>
                <Text>{QUIZ_TEXT[personType].managing.text2}</Text>
                <Text>{QUIZ_TEXT[personType].managing.text3}</Text>
                <Text>{QUIZ_TEXT[personType].managing.text4}</Text>
                <Text>{QUIZ_TEXT[personType].managing.text5}</Text>
              </View>
            </ScrollView>
          </Dialog.Content>
        </Dialog>
      </Portal>

      <RadarChart
        chartSize={SCREEN_MIN_DIMENSION - DEFAULT_SCREEN_PADDING * 2}
        maxScore={QUIZ_MAX_SCORE}
        axes={axes}
      />
    </View>
  );
};

export default QuizResults;
