import React from 'react';
import { View } from 'react-native';

import { COMPLETE_QUIZ } from 'src/common/constants';
import { AppRoute, ButtonMode } from 'src/common/enums';
import { MainButton, Text } from 'src/components';
import { useAppNavigation } from 'src/hooks';
import styles from './styles';

const QuizInfo: React.FC = () => {
  const navigation = useAppNavigation();

  const navigateToQuiz = () => {
    navigation.navigate(AppRoute.QUIZ);
  };

  return (
    <View style={styles.quizContent}>
      <Text style={styles.quizHeader}>{COMPLETE_QUIZ}</Text>
      <MainButton mode={ButtonMode.CONTAINED} onPress={navigateToQuiz}>
        Complete Quiz
      </MainButton>
    </View>
  );
};

export default QuizInfo;
