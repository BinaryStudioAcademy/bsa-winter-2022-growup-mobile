import React from 'react';
import { View } from 'react-native';

import { TagType } from 'src/common/enums';
import { Tag, Text } from 'src/components';
import useStyles from './styles';

type SkillsSectionProps = {
  header: string;
  skills: string[];
  isHintHeader?: boolean;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({
  header,
  skills,
  isHintHeader = false,
}) => {
  const styles = useStyles();

  return (
    <View>
      <Text style={[styles.heading, isHintHeader && styles.hintHeader]}>
        {header}
      </Text>
      <View style={styles.tagsContent}>
        {skills.map(item => {
          // TODO add key={item.skillId} when DB is ready
          return (
            <Tag
              style={styles.tag}
              tagType={TagType.COMMON}
              key={item}
              hasIcon={true}
              text={item}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SkillsSection;
