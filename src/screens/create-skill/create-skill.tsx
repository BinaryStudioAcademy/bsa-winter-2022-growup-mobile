import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ICreateSkill } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { skillActions } from 'src/store/actions';
import CreateSkillForm from './form';

const CreateSkill: React.FC = () => {
  const dispatch = useAppDispatch();

  const submit = (data: ICreateSkill) => {
    dispatch(skillActions.create(data));
  };

  return (
    <SafeAreaView>
      <CreateSkillForm onSubmit={submit} />
    </SafeAreaView>
  );
};

export default CreateSkill;
