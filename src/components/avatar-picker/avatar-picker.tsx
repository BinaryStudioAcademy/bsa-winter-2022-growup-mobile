import React from 'react';
import { View } from 'react-native';
import { Asset } from 'react-native-image-picker';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { captureSingleImage, selectSingleImageFromGallery } from 'src/helpers';
import { Heading, MainButton } from '..';
import styles from './styles';

type AvatarPickerProps = {
  onPick: (avatar?: Asset) => void;
};

const AvatarPicker: React.FC<AvatarPickerProps> = ({ onPick }) => {
  const pick = () => {
    selectSingleImageFromGallery().then(onPick);
  };

  const capture = () => {
    captureSingleImage('front').then(onPick);
  };

  return (
    <View style={styles.container}>
      <Heading level={HeadingLevel.H6}>Select avatar</Heading>
      <View style={styles.buttons}>
        <MainButton
          mode={ButtonMode.CONTAINED}
          compact={true}
          onPress={capture}
        >
          Take a photo
        </MainButton>
        <MainButton mode={ButtonMode.OUTLINED} compact={true} onPress={pick}>
          Open gallery
        </MainButton>
      </View>
    </View>
  );
};

export default AvatarPicker;
