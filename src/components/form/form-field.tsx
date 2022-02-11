import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const FormField: React.FC = ({ children }) => {
  return <View style={styles.field}>{children}</View>;
};

export default FormField;
