import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Card } from 'react-native-paper';

import { TextAppearance } from 'src/common/enums';
import { ISkill } from 'src/common/types';
import { Text } from '../text';
import useStyles from './styles';

type SkillCardProps = {
  skill: ISkill;
  style?: StyleProp<ViewStyle>;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, style }) => {
  const styles = useStyles();

  return (
    <Card style={[styles.content, style]}>
      <Text style={styles.textName}>{skill.name}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.hint} appearance={TextAppearance.HINT}>
          Category:
        </Text>
        <Text>{skill.type}</Text>
      </View>
    </Card>
  );
};

export default SkillCard;
