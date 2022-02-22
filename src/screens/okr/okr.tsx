import React, { useState } from 'react';
import {
  useNavigation,
  CompositeNavigationProp,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute, OKRStatus } from 'src/common/enums';
import { IOkr, AppStackParamList } from 'src/common/types';
import addActions from './add-actions';
import { OKRList } from './components';
import { RootStackParamList } from 'src/common/types/navigation/root-stack-param';
import styles from './styles';

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

type OKRNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<AppStackParamList>
>;

const OKRScreen: React.FC = () => {
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);
  const navigation = useNavigation<OKRNavigationProps>();

  const addFunctions: Record<string, () => void> = {
    ownOKR: () => {
      navigation.navigate(AppRoute.APP, {
        screen: AppRoute.ADD_OKR,
        params: {
          isTeamOkr: false,
        },
      });
    },
    teamOKR: () => {
      navigation.navigate(AppRoute.APP, {
        screen: AppRoute.ADD_OKR,
        params: {
          isTeamOkr: true,
        },
      });
    },
  };

  const handleItemPress = (name: string) => {
    addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <OKRList data={MOCK_okrs} />
      <FAB.Group
        open={addMenuOpen}
        visible={true}
        icon="plus"
        actions={addActions(handleItemPress)}
        onStateChange={handleMenuStateChange}
      />
    </SafeAreaView>
  );
};

export default OKRScreen;
