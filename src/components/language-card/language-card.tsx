import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Card } from 'react-native-paper';

import { TextAppearance } from 'src/common/enums';
import { ILanguage } from 'src/common/types';
import { Text } from '../text';
import useStyles from './styles';

type LanguageCardProps = {
  language: ILanguage;
  style?: ViewStyle;
};

const LanguageCard: React.FC<LanguageCardProps> = ({ language, style }) => {
  const styles = useStyles();

  return (
    <Card style={[styles.content, style]}>
      <Text style={styles.textName}>{language.name}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.hint} appearance={TextAppearance.HINT}>
          Level:
        </Text>
        <Text>{language.level}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.hint} appearance={TextAppearance.HINT}>
          Certificate:
        </Text>
        <Text>{language.certificate}</Text>
      </View>
    </Card>
  );
};

export default LanguageCard;
