import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Menu } from 'react-native-paper';

import { HeadingLevel } from 'src/common/enums';
import { DotsVerticalIcon, Heading } from 'src/components';
import { useAppDispatch, useColor } from 'src/hooks';
import { authActions } from 'src/store/actions';
import useStyles from './styles';

const Header: React.FC = () => {
  const colorBlack = useColor('BLACK');
  const styles = useStyles();

  const [menuVisible, setMenuVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeMenuVisibility = () => setMenuVisible(current => !current);

  const handleLogout = () => {
    dispatch(authActions.signOut());
  };

  return (
    <View style={styles.headerContent}>
      <Heading level={HeadingLevel.H5} style={styles.headingText}>
        User profile
      </Heading>
      <View style={styles.headerMenu}>
        <Menu
          visible={menuVisible}
          onDismiss={handleChangeMenuVisibility}
          anchor={
            <TouchableOpacity onPress={handleChangeMenuVisibility}>
              <DotsVerticalIcon color={colorBlack} size={30} />
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={handleLogout} title="Logout" />
        </Menu>
      </View>
    </View>
  );
};

export default Header;
