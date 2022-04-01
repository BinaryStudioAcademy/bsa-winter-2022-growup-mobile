import React, { useEffect, useMemo } from 'react';
import { Dialog, Portal } from 'react-native-paper';

import { QUIZ_MAX_SCORE, SCREEN_MIN_DIMENSION } from 'src/common/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Heading, RadarChart, Text } from 'src/components';
import { quizActions } from 'src/store/quiz';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { HeadingLevel } from 'src/common/enums';
import useStyles from './styles';

const quizText = {
  general:
    'Analyticals are task-oriented and unassertive. They are concerned with analytical processes and are persistent,systematic problem solvers. They can also be seen as aloof, picky, and critical. Analyticals are very securityconscious and have a high need to be right, leading them to an over reliance on data collection. In their questfor data, they tend to ask many questions about specifics. Their actions and decisions tend to be slow andextremely cautious, but they will rarely miss a deadline. Although they are great problem solvers, Analyticalscould be better decision-makers. Analyticals tend to be perfectionists, serious, and orderly. They focus on the details and the process of work,and become irritated by surprises and “glitches.” Their theme is, “Notice my efficiency” and their emphasis is oncompliance and working within existing guidelines to promote quality in products or service. Analyticals like organization and structure, and dislike too much involvement with other people. They workslowly and precisely by themselves, are time-disciplined, and prefer an intellectual work environment.Analyticals tend to be critical of their own performance. They tend to be skeptical and like to see things inwriting. Analyticals’ primary strengths are their accuracy, dependability, independence, follow-through, andorganization. Their primary weaknesses are their procrastination and conservative natures, which promote theirtendency to be picky and over-cautious. Occupations that they tend to gravitate toward are accounting,engineering, computer programming, the hard sciences (chemistry, physics, and math) systems analysis, andarchitecture.',
  relationship: {
    text1: '• Support their organized, thoughtful approach',
    text2: '• Demonstrate through actions rather than words',
    text3: '• List advantages and disadvantages of any plan',
    text4: '• Provide solid, tangible, factual evidence',
    text5: '• Provide guarantees that actions won’t backfire',
  },
  managing: {
    text1:
      '• Motivate: Appeal to their need to be accurate and to their logical approach to things.',
    text2:
      '• Correct: Specify the exact behavior and outline how you would like to see the behavior changed. Establish checkpoints and timelines.',
    text3:
      '• Compliment: Praise their efficiency, though processes, organization, persistence, and accuracy.',
    text4:
      '• Delegate: Take time to answer all their questions about structure and guidance. The more they understand the details, the more likely they will be to complete the task properly. Be sure to establish deadlines.',
    text5:
      '• Counsel: Describe the process that you plan to follow. Outline how that process will produce the results they seek. Ask questions to help them give the right information. Let them show how much they know.',
  },
};

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
                <Text>{quizText.general}</Text>
              </View>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  Relationship
                </Heading>
                <Text style={styles.boldText}>
                  In relationships with Analyticals:
                </Text>
                <Text>{quizText.relationship.text1}</Text>
                <Text>{quizText.relationship.text2}</Text>
                <Text>{quizText.relationship.text3}</Text>
                <Text>{quizText.relationship.text4}</Text>
                <Text>{quizText.relationship.text5}</Text>
              </View>
              <View style={styles.textContent}>
                <Heading level={HeadingLevel.H6} style={styles.containerHeader}>
                  Managing
                </Heading>
                <Text>{quizText.managing.text1}</Text>
                <Text>{quizText.managing.text2}</Text>
                <Text>{quizText.managing.text3}</Text>
                <Text>{quizText.managing.text4}</Text>
                <Text>{quizText.managing.text5}</Text>
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
