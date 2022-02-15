import React from 'react';
import { View } from 'react-native';

import { TagType } from 'src/common/enums';
import { Tag, Text } from 'src/components';
import styles from './styles';

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
  return (
    <View>
      <Text style={[styles.heading, isHintHeader && styles.hintHeader]}>
        {header}
      </Text>
      <View style={styles.tagsContent}>
        {skills.map((item, index) => {
          return (
            <Tag
              style={styles.tag}
              tagType={TagType.COMMON}
              key={index}
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
