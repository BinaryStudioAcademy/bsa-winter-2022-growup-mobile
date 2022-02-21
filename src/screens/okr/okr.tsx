import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IOkr } from 'src/common/types';

import { OKRList } from './components';

const OKRScreen: React.FC = () => {
  const MOCK_okrs: IOkr[] = [
    {
      id: '1',
      name: 'Improve JS Skills',
      type: 'Strategic',
      year: 2020,
      inProgress: true,
      objectives: [
        {
          name: 'Take React JS advanced course',
          points: 84,
          maxPoints: 100,
        },
        {
          name: 'Read "You Don\'t Know JS"',
          points: 51,
          maxPoints: 100,
        },
        {
          name: 'Learn Vue JS + PHP',
          points: 26,
          maxPoints: 100,
        },
      ],
    },
    {
      id: '2',
      name: 'Improve Team Cooperation Skills',
      type: 'Strategic',
      year: 2020,
      inProgress: false,
      objectives: [],
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <OKRList data={MOCK_okrs} />
      </View>
    </SafeAreaView>
  );
};

export default OKRScreen;
