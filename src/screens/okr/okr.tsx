import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OKRStatus } from 'src/common/enums';
import { IOkr } from 'src/common/types';

import { OKRList } from './components';

const OKRScreen: React.FC = () => {
  const MOCK_okrs: IOkr[] = [
    {
      id: '1',
      userId: 'u1',
      name: 'Improve JS Skills',
      type: 'Strategic',
      year: 2020,
      status: OKRStatus.InProgress,
      keyResults: [
        {
          name: 'Take React JS advanced course',
          points: 84,
        },
        {
          name: 'Read "You Don\'t Know JS"',
          points: 51,
        },
        {
          name: 'Learn Vue JS + PHP',
          points: 26,
        },
      ],
    },
    {
      id: '2',
      userId: 'u2',
      name: 'Improve Team Cooperation Skills',
      type: 'Strategic',
      year: 2020,
      status: OKRStatus.Finished,
      keyResults: [],
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
