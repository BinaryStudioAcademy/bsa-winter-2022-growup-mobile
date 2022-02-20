import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileRoute } from 'src/common/enums';
import { Text } from 'src/components';
import addActions from './add-actions';
import { CareerLayout } from './components';
import styles from './styles';

//TODO: delete temp data
const data = [
  {
    position: 'Fullstack Developer',
    company: 'Binary Studio',
    startDate: new Date('2023-05-31'),
    endDate: new Date('2024-05-23'),
  },
  {
    position: 'Frontend Developer',
    company: 'Binary Studio',
    startDate: new Date('2022-02-12'),
    endDate: new Date('2023-05-23'),
  },
  {
    position: 'Backend Developer',
    company: 'Binary Studio',
    startDate: new Date('2021-05-23'),
    endDate: new Date('2022-02-12'),
  },
];

type IProfileScreenProps = Record<string, never>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  const navigation = useNavigation();
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);

  const addFunctions: Record<string, () => void> = {
    skill: () => {
      navigation.navigate({
        name: ProfileRoute.CREATE_SKILL as never,
        params: {} as never,
      });
    },
    location: () => {
      /* TODO */
    },
    education: () => {
      /* TODO */
    },
    language: () => {
      /* TODO */
    },
    careerPoint: () => {
      /* TODO */
    },
    interest: () => {
      /* TODO */
    },
  };

  const handleItemPress = (name: string) => {
    addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  return (
    <SafeAreaView style={styles.fullHeight}>
      <View style={styles.fullHeight}>
        <Text>Profile screen!</Text>
        <View style={styles.content}>
          <CareerLayout items={data} />
        </View>
        <FAB.Group
          open={addMenuOpen}
          visible={true}
          icon="plus"
          actions={addActions(handleItemPress)}
          onStateChange={handleMenuStateChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
