const addActions = (select: (name: string) => void) => {
  const getSelect = (name: string) => () => select(name);

  return [
    {
      label: 'Skill',
      icon: 'account',
      onPress: getSelect('skill'),
    },
    {
      label: 'Location',
      icon: 'map-marker',
      onPress: getSelect('location'),
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
      label: 'Career point',
      icon: 'check-circle',
      onPress: getSelect('careerPoint'),
    },
    {
      label: 'Interest',
      icon: 'heart',
      onPress: getSelect('interest'),
    },
  ];
};

export default addActions;
