import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { TagType } from 'src/common/enums';
import { useColor } from 'src/hooks';
import { CheckIcon, Text } from '..';
import useStyles from './styles';

type TagProps = {
  text: string;
  tagType: TagType;
  hasIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Tag: React.FC<TagProps> = ({ text, tagType, hasIcon = false, style }) => {
  const styles = useStyles();
  const colorPrimary = useColor('PRIMARY');

  const textStyle = useMemo(() => {
    if (tagType === TagType.COMMON) {
      return styles.text;
    }
    return styles.textAttention;
  }, [styles, tagType]);

  return (
    <View style={[styles.global, styles[tagType], style]}>
      <Text style={[textStyle, hasIcon && styles.textMargin]}>{text}</Text>
      {hasIcon && <CheckIcon color={colorPrimary} size={18} />}
    </View>
  );
};

export default Tag;
