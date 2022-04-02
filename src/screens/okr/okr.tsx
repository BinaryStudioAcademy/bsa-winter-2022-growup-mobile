import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoute } from 'src/common/enums';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { EmptyListMessage, ScreenHeader } from 'src/components';
import { okrActions } from 'src/store/actions';
import addActions from './add-actions';
import { OKRList } from './components';
import useStyles from './styles';

const OKRScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const { okrs, okrsLoading } = useAppSelector(state => state.okr);

  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);

  const addFunctions: Record<string, () => void> = {
    ownOKR: () => {
      navigation.navigate(AppRoute.APP, {
        screen: AppRoute.ADD_OKR,
        params: {
          isTeamOkr: false,
        },
      });
    },
    teamOKR: () => {
      navigation.navigate(AppRoute.APP, {
        screen: AppRoute.ADD_OKR,
        params: {
          isTeamOkr: true,
        },
      });
    },
  };

  const handleItemPress = (name: string) => {
    addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  const loadOKRs = useCallback(() => {
    dispatch(okrActions.loadOKRs());
  }, [dispatch]);

  useEffect(() => {
    loadOKRs();
  }, [loadOKRs]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScreenHeader>OKRs</ScreenHeader>
      <View style={styles.screen}>
        {!okrs?.length && (
          <EmptyListMessage>
            You haven&apos;t created any OKRs for yourself yet.
          </EmptyListMessage>
        )}
        <OKRList data={okrs} loading={okrsLoading} onReload={loadOKRs} />
        <FAB.Group
          open={addMenuOpen}
          visible={true}
          icon="plus"
          actions={addActions(handleItemPress)}
          onStateChange={handleMenuStateChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default OKRScreen;
