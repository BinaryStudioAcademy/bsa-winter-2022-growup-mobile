import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'src/components';
import { useAppNavigation, useAppSelector } from 'src/hooks';
import useStyles from './styles';

const OpportunityDetailsScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const styles = useStyles();

  const { expandedOpportunity } = useAppSelector(state => state.opportunity);

  useEffect(() => {
    if (!expandedOpportunity) {
      navigation.goBack();
    }
  }, [navigation, expandedOpportunity]);

  if (!expandedOpportunity) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>Details</Text>
      </View>
    </SafeAreaView>
  );
};

export default OpportunityDetailsScreen;
