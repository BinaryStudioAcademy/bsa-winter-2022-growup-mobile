import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { AppColor, TagType } from 'src/common/enums';
import { CheckIcon, Text } from '..';
import styles from './styles';

type TagProps = {
  text: string;
  tagType: TagType;
  hasIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Tag: React.FC<TagProps> = ({ text, tagType, hasIcon = false, style }) => {
  const textStyle = useMemo(() => {
    if (tagType === TagType.COMMON) {
      return styles.text;
    }
    return styles.textAttention;
  }, [tagType]);

  return (
    <View style={[styles.global, styles[tagType], style]}>
      <Text style={[textStyle, hasIcon && styles.textMargin]}>{text}</Text>
      {hasIcon && <CheckIcon color={AppColor.PRIMARY} size={18} />}
    </View>
  );
};

export default Tag;
