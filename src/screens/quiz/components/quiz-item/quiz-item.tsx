import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { HeadingLevel } from 'src/common/enums';
import { IQuizQuestion } from 'src/common/types';
import { Heading, Text } from 'src/components';
import styles from './styles';

interface IQuizItemProps {
  item: IQuizQuestion;
  onAnswerChange: (
    questionId: string,
    answerId: string,
    prevAnswerId: string
  ) => void;
}

const QuizItem: React.FC<IQuizItemProps> = ({ item, onAnswerChange }) => {
  const [value, setValue] = useState('0');

  const handleChangeAnswer = (answerIndex: string) => {
    if (answerIndex !== value) {
      onAnswerChange(item.id, answerIndex, value);
      setValue(answerIndex);
    }
  };

  return (
    <View>
      <Heading level={HeadingLevel.H5} style={styles.question}>
        {item.question}
      </Heading>
      <View style={styles.answersContainer}>
        <RadioButton.Group onValueChange={handleChangeAnswer} value={value}>
          {item.answers.map((answer, index) => (
            <View key={answer.id} style={styles.answerContainer}>
              <RadioButton value={index?.toString()} />
              <Text style={styles.answerText}>{answer.answer}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default QuizItem;
