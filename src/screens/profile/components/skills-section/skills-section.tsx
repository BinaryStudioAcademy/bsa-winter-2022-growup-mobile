import React from 'react';
import { View } from 'react-native';
import { TagType } from 'src/common/enums';

import { Tag } from 'src/components';

type IOpportunitiesScreenProps = Record<string, never>;

const SkillsSection: React.FC<IOpportunitiesScreenProps> = () => {
  return (
    <View>
      <Tag tagType={TagType.ATTENTION}>DOM manipilation</Tag>
      <Tag hasIcon={true} tagType={TagType.COMMON}>
        DOM manipilation
      </Tag>
    </View>
  );
};

export default SkillsSection;
