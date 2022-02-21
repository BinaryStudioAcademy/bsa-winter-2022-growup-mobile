const addActions = (select: (name: string) => void) => {
  const getSelect = (name: string) => () => select(name);

  return [
    {
      label: 'Own OKR',
      icon: 'account-circle',
      onPress: getSelect('ownOKR'),
    },
    {
      label: 'Team OKR',
      icon: 'account-supervisor-circle',
      onPress: getSelect('teamOKR'),
    },
  ];
};

export default addActions;
