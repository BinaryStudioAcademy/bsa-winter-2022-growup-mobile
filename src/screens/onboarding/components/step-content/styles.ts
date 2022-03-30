import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const grey = useColor('GREY');

  return useMemo(
    () =>
      StyleSheet.create({
        input: {
          marginVertical: 10,
          width: '90%',
          alignSelf: 'center',
        },
        content: {
          flex: 1,
          padding: DEFAULT_SCREEN_PADDING,
        },
        header: {
          alignSelf: 'center',
          fontFamily: 'NunitoSans-SemiBold',
        },
        buttonContainer: {
          alignSelf: 'flex-start',
          marginVertical: 20,
        },
        imageContainer: {
          alignSelf: 'center',
          marginVertical: 30,
        },
        interestingContent: {
          paddingVertical: 20,
        },
        interestingHeadings: {
          paddingVertical: 10,
        },
        tagButton: {
          width: 150,
        },
        tabButtonLabel: {
          fontSize: 15,
        },
        userAvatar: {
          backgroundColor: grey,
        },
        cardItem: {
          marginVertical: 5,
        },
      }),
    [grey]
  );
};

export default useStyles;
