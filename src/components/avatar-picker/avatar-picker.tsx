import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu } from 'react-native-paper';
import { Asset } from 'react-native-image-picker';

import { ButtonMode } from 'src/common/enums';
import { captureSingleImage, selectSingleImageFromGallery } from 'src/helpers';
import { MainButton } from '..';
import styles from './styles';

type AvatarPickerProps = {
  onPick: (avatar?: Asset) => void;
};

const AvatarPicker: React.FC<AvatarPickerProps> = ({ onPick }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleShow = () => {
    setMenuOpen(true);
  };

  const handleHide = () => {
    setMenuOpen(false);
  };

  const handlePick = () => {
    selectSingleImageFromGallery().then(onPick);
  };

  const handleCapture = () => {
    captureSingleImage('front').then(onPick);
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={menuOpen}
        onDismiss={handleHide}
        anchor={
          <MainButton
            mode={ButtonMode.CONTAINED}
            compact={true}
            onPress={handleShow}
          >
            Add an avatar
          </MainButton>
        }
      >
        <Menu.Item title="Take a photo right now" onPress={handleCapture} />
        <Menu.Item title="Select from gallery" onPress={handlePick} />
      </Menu>
    </View>
  );
};

export default AvatarPicker;
