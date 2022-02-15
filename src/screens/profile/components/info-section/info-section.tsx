import React from 'react';
import { View } from 'react-native';

import { TagType } from 'src/common/enums';
import { Tag, Text } from 'src/components';
import styles from './styles';

type InfoSectionProps = {
  infoHeader: string;
  infoTags: string[];
};

const InfoSection: React.FC<InfoSectionProps> = ({ infoHeader, infoTags }) => {
  return (
    <View>
      <Text style={styles.heading}>{infoHeader}</Text>
      <View style={styles.tagsContent}>
        {infoTags.map((item, index) => {
          return (
            <Tag style={styles.tag} tagType={TagType.COMMON} key={index}>
              {item}
            </Tag>
          );
        })}
      </View>
    </View>
  );
};

export default InfoSection;
