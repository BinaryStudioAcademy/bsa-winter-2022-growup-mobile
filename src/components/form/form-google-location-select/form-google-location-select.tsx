import React, { useMemo, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { AutocompleteSelect, Text } from 'src/components';
import { useDebouncedTimeout } from 'src/hooks';
import { googlePlacesApi } from 'src/services';
import { REQUEST_DEBOUNCE_TYPING_DURATION } from 'src/common/constants';
import useStyles from '../styles';

type AutocompleteSelectProps = React.ComponentPropsWithoutRef<
  typeof AutocompleteSelect
>;

type FormGoogleLocationSelectProps = Omit<
  AutocompleteSelectProps,
  'value' | 'onChangeText' | 'list'
> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormGoogleLocationSelect: React.FC<FormGoogleLocationSelectProps> = ({
  name,
  containerStyle,
  ...selectProps
}) => {
  const styles = useStyles();

  const [options, setOptions] = useState<string[]>([]);
  const [optionsLoading, setOptionsLoading] = useState<boolean>(false);

  const [lastOptionsLoadingValue, setLastOptionsLoadingValue] =
    useState<string>('');

  const { values, errors, touched, setFieldValue } =
    useFormikContext<FormikValues>();

  const selectOptions = useMemo(
    () => options.map(opt => ({ label: opt, value: opt })),
    [options]
  );

  const loadOptions = async () => {
    if (optionsLoading || values[name] === lastOptionsLoadingValue) {
      return;
    }

    if (!values[name] || !values[name].length) {
      setOptions([]);
      return;
    }

    setOptionsLoading(true);

    const newOptions = await googlePlacesApi.predictAutocomplete(values[name]);
    setOptions(newOptions);
    setLastOptionsLoadingValue(values[name]);

    setOptionsLoading(false);
  };

  const resetAutocompleteLoad = useDebouncedTimeout(
    loadOptions,
    REQUEST_DEBOUNCE_TYPING_DURATION
  );

  const error = touched[name] && errors[name];

  const handleChange = (value: unknown) => {
    resetAutocompleteLoad();
    setFieldValue(name, value);
  };

  return (
    <View style={containerStyle}>
      <AutocompleteSelect
        value={values[name]}
        onChangeText={handleChange}
        list={selectOptions}
        {...selectProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormGoogleLocationSelect;
