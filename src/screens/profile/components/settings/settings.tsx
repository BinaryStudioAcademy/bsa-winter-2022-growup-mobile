import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { useTheme } from 'src/blocs/theme-bloc';
import { ThemeMode } from 'src/common/enums';
import { Switch } from 'src/components';
import { useSwitchThemeMode } from 'src/hooks';

const Settings: React.FC = () => {
  const { mode } = useTheme();
  const setMode = useSwitchThemeMode();

  const [modeSwitchValue, setModeSwitchValue] = useState<boolean>(
    mode === ThemeMode.Dark
  );

  const handleChange = (value: boolean) => {
    setModeSwitchValue(value);
    setMode(value ? ThemeMode.Dark : ThemeMode.Light);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Switch
        label="Dark theme"
        value={modeSwitchValue}
        onValueChange={handleChange}
      />
    </ScrollView>
  );
};

export default Settings;
