import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ICreateSkillPayload } from 'src/common/types';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { skillActions } from 'src/store/actions';
import { CreateSkillForm } from './components';
import { ScrollView } from 'react-native';
import useStyles from './styles';

const CreateSkill: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (data: ICreateSkillPayload) => {
    dispatch(skillActions.createSkill(data));
    handleGoBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <CreateSkillForm onSubmit={handleSubmit} onBack={handleGoBack} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateSkill;
