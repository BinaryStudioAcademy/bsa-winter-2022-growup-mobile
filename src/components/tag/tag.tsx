import React, { ReactNode, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { AppColor, TagType } from 'src/common/enums';
import { CheckIcon, Text } from '..';
import styles from './styles';

type TagProps = {
  children: ReactNode;
  hasIcon?: boolean;
  tagType: TagType;
  style?: StyleProp<ViewStyle>;
};

const Tag: React.FC<TagProps> = ({
  children,
  hasIcon = false,
  tagType,
  style,
}) => {
  const textStyle = useMemo(() => {
    if (tagType === TagType.COMMON) {
      return styles.text;
    }
    return styles.textAttention;
  }, [tagType]);

  return (
    <View style={[styles.global, styles[tagType], style]}>
      <Text style={[textStyle, hasIcon && styles.textMargin]}>{children}</Text>
      {hasIcon && <CheckIcon color={AppColor.PRIMARY} size={18} />}
    </View>
  );
};

export default Tag;
