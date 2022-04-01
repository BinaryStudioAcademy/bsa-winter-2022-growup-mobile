import React, { useEffect, useMemo } from 'react';
import { Dialog, Portal } from 'react-native-paper';

import {
  GENERAL_TEXT,
  MANAGING_TEXT_FIVE,
  MANAGING_TEXT_FOUR,
  MANAGING_TEXT_ONE,
  MANAGING_TEXT_THREE,
  MANAGING_TEXT_TWO,
  QUIZ_MAX_SCORE,
  RELATIONSHIP_TEXT_FIVE,
  RELATIONSHIP_TEXT_FOUR,
  RELATIONSHIP_TEXT_ONE,
  RELATIONSHIP_TEXT_THREE,
  RELATIONSHIP_TEXT_TWO,
  SCREEN_MIN_DIMENSION,
} from 'src/common/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Heading, RadarChart, Text } from 'src/components';
import { quizActions } from 'src/store/quiz';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { HeadingLevel } from 'src/common/enums';
import useStyles from './styles';

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

  if (!axes) {
    return null;
  }

  return (
    <View>
      <Heading level={HeadingLevel.H5} style={styles.containerHeader}>
        Your type: Analytical
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
                <Text>{GENERAL_TEXT}</Text>
              </View>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  Relationship
                </Heading>
                <Text style={styles.boldText}>
                  In relationships with Analyticals:
                </Text>
                <Text>{RELATIONSHIP_TEXT_ONE}</Text>
                <Text>{RELATIONSHIP_TEXT_TWO}</Text>
                <Text>{RELATIONSHIP_TEXT_THREE}</Text>
                <Text>{RELATIONSHIP_TEXT_FOUR}</Text>
                <Text>{RELATIONSHIP_TEXT_FIVE}</Text>
              </View>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  Managing
                </Heading>
                <Text>{MANAGING_TEXT_ONE}</Text>
                <Text>{MANAGING_TEXT_TWO}</Text>
                <Text>{MANAGING_TEXT_THREE}</Text>
                <Text>{MANAGING_TEXT_FOUR}</Text>
                <Text>{MANAGING_TEXT_FIVE}</Text>
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
