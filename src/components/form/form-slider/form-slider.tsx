import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Slider from '@react-native-community/slider';
import { FormikValues, useFormikContext } from 'formik';

import { Text } from 'src/components';
import { AppColor } from 'src/common/enums';
import styles from '../styles';

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
  const { values, errors, setFieldValue } = useFormikContext<FormikValues>();

  const error = errors[name];

  const handleChange = (value: unknown) => setFieldValue(name, value);

  return (
    <View style={containerStyle}>
      <Slider
        onValueChange={handleChange}
        value={values[name]}
        minimumTrackTintColor={AppColor.PRIMARY}
        maximumTrackTintColor={AppColor.PRIMARY}
        thumbTintColor={AppColor.PRIMARY}
        {...sliderProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormSlider;
