import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { ICreateSkillPayload } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { skillActions } from 'src/store/actions';
import { CreateSkillForm } from './components';
import { ScrollView } from 'react-native';
import styles from './styles';

const CreateSkill: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (data: ICreateSkillPayload) => {
    dispatch(skillActions.createSkill(data));
    handleGoBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CreateSkillForm onSubmit={handleSubmit} onBack={handleGoBack} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateSkill;
