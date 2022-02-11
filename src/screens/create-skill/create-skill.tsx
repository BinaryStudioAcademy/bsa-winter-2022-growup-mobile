import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { ICreateSkill } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { skillActions } from 'src/store/actions';
import CreateSkillForm from './form';

const CreateSkill: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  const submit = (data: ICreateSkill) => {
    dispatch(skillActions.create(data));
    back();
  };

  return (
    <SafeAreaView>
      <CreateSkillForm onSubmit={submit} onCancel={back} />
    </SafeAreaView>
  );
};

export default CreateSkill;
