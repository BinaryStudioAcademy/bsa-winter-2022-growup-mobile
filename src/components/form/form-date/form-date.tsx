import React from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputEndEditingEventData,
  View,
  ViewStyle,
} from 'react-native';
import { FormikValues, useFormikContext } from 'formik';
import dayjs from 'dayjs';

import { MIN_DATE_INPUT_YEAR } from 'src/common/constants';
import { DateInput, Text } from 'src/components';
import { useColor } from 'src/hooks';
import useStyles from '../styles';

type DateInputProps = React.ComponentPropsWithoutRef<typeof DateInput>;

type FormDateProps = Omit<DateInputProps, 'value' | 'onChange' | 'onBlur'> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormDate: React.FC<FormDateProps> = ({
  name,
  containerStyle,
  ...inputProps
}) => {
  const styles = useStyles();
  const colorInputBg = useColor('INPUT_BACKGROUND');
  const colorError = useColor('ERROR');

  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (date: Date | undefined) => setFieldValue(name, date);

  const handleManualEdit = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = event.nativeEvent;
    const date = dayjs(text, 'DD/MM/YYYY');
    if (date.isValid() && date.year() > MIN_DATE_INPUT_YEAR) {
      setFieldValue(name, date.toDate());
    } else {
      setFieldValue(name, undefined);
    }
  };

  return (
    <View style={containerStyle}>
      <DateInput
        autoFocus={true}
        value={values[name] ? new Date(values[name]) : undefined}
        onChange={handleChange}
        onEndEditing={handleManualEdit}
        outlineColor={!error ? colorInputBg : colorError}
        onBlur={handleBlur(name)}
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.dateError}>{error}</Text>}
    </View>
  );
};

export default FormDate;
