import React from 'react';
import { View } from 'react-native';

import { TagType } from 'src/common/enums';
import { Tag, Text } from 'src/components';
import styles from './styles';

type InfoSectionProps = {
  header: string;
  tags: string[];
};

const InfoSection: React.FC<InfoSectionProps> = ({ header, tags }) => {
  return (
    <View>
      <Text style={styles.heading}>{header}</Text>
      <View style={styles.tagsContent}>
        {tags.map(item => {
          // TODO add key={item.tagId} when DB is ready
          return (
            <Tag
              style={styles.tag}
              tagType={TagType.COMMON}
              key={item}
              text={item}
            />
          );
        })}
      </View>
    </View>
  );
};

export default InfoSection;
