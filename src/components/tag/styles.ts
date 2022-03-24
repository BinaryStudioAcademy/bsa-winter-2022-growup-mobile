import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { TagType } from 'src/common/enums';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const tagCommonBg = useColor('TAG_COMMON_BACKGROUND');
  const tagAttentionBg = useColor('TAG_ATTENTION_BACKGROUND');
  const accent = useColor('ACCENT');
  const tagTextCommon = useColor('TAG_TEXT_COMMON');

  return useMemo(
    () =>
      StyleSheet.create({
        global: {
          borderRadius: 15,
          paddingVertical: 1,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        },
        [TagType.COMMON]: {
          backgroundColor: tagCommonBg,
        },
        [TagType.ATTENTION]: {
          backgroundColor: tagAttentionBg,
          borderWidth: 2,
          borderColor: accent,
        },
        text: {
          color: tagTextCommon,
          fontFamily: 'NunitoSans-Bold',
        },
        textAttention: {
          color: accent,
          fontFamily: 'NunitoSans-Bold',
        },
        textMargin: {
          marginRight: 5,
        },
      }),
    [tagCommonBg, tagAttentionBg, accent, tagTextCommon]
  );
};

export default useStyles;
