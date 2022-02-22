import React from 'react';
import { View } from 'react-native';
import { Asset } from 'react-native-image-picker';
import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { captureSingleImage, selectSingleImageFromGallery } from 'src/helpers';
import { Heading, MainButton } from '..';
import styles from './styles';

interface Props {
  onPick: (avatar?: Asset) => void;
}

const AvatarPicker: React.FC<Props> = ({ onPick }) => {
  const pick = () => selectSingleImageFromGallery().then(onPick);
  const capture = () => captureSingleImage('front').then(onPick);

  return (
    <View style={styles.container}>
      <Heading level={HeadingLevel.H6}>Select avatar</Heading>
      <View style={styles.buttons}>
        <MainButton mode={ButtonMode.CONTAINED} onPress={capture}>
          Take a photo right now
        </MainButton>
        <MainButton mode={ButtonMode.OUTLINED} onPress={pick}>
          Select from gallery
        </MainButton>
      </View>
    </View>
  );
};

export default AvatarPicker;
