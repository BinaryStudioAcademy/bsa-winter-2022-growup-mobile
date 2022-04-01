const addActions = (select: (name: string) => void) => {
  const getSelect = (name: string) => () => select(name);

  return [
    {
      label: 'Skill',
      icon: 'account',
      onPress: getSelect('skill'),
    },
    {
      label: 'Education',
      icon: 'school',
      onPress: getSelect('education'),
    },
    {
      label: 'Language',
      icon: 'web',
      onPress: getSelect('language'),
    },
    {
      label: 'Career experience',
      icon: 'check-circle',
      onPress: getSelect('careerPoint'),
    },
  ];
};

export default addActions;
