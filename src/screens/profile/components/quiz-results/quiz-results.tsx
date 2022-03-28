import React, { useEffect, useMemo } from 'react';

import { QUIZ_MAX_SCORE, SCREEN_MIN_DIMENSION } from 'src/common/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { RadarChart } from 'src/components';
import { quizActions } from 'src/store/quiz';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const QuizResults: React.FC = () => {
  const dispatch = useAppDispatch();

  const { quizResults, quizResultsLoading } = useAppSelector(
    state => state.quiz
  );

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
    <RadarChart
      chartSize={SCREEN_MIN_DIMENSION - DEFAULT_SCREEN_PADDING * 2}
      maxScore={QUIZ_MAX_SCORE}
      axes={axes}
    />
  );
};

export default QuizResults;
