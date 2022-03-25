import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Slider from '@react-native-community/slider';
import { FormikValues, useFormikContext } from 'formik';

import { Text } from 'src/components';
import { useColor } from 'src/hooks';
import useStyles from '../styles';

type SliderProps = React.ComponentPropsWithoutRef<typeof Slider>;

type FormSliderProps = Omit<SliderProps, 'value' | 'onValueChange'> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormSlider: React.FC<FormSliderProps> = ({
  name,
  containerStyle,
  ...sliderProps
}) => {
  const styles = useStyles();
  const colorPrimary = useColor('PRIMARY');

  const { values, errors, setFieldValue } = useFormikContext<FormikValues>();

  const error = errors[name];

  const handleChange = (value: unknown) => setFieldValue(name, value);

  return (
    <View style={containerStyle}>
      <Slider
        onValueChange={handleChange}
        value={values[name]}
        minimumTrackTintColor={colorPrimary}
        maximumTrackTintColor={colorPrimary}
        thumbTintColor={colorPrimary}
        {...sliderProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormSlider;
