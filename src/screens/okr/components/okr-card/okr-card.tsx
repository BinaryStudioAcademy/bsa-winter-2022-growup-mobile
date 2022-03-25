import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';

import { OKRStatus, TextAppearance } from 'src/common/enums';
import { IOkr } from 'src/common/types';
import { Text, Avatar } from 'src/components';
import { KeyResult } from '..';
import useStyles from './styles';

const KEY_RESULTS_SHOW_LIMIT = 2;

type OKRCardProps = {
  okr: IOkr;
};

const OKRCard: React.FC<OKRCardProps> = ({ okr }) => {
  const styles = useStyles();

  const shownKeyResults = useMemo(
    () => okr.keyResults.slice(0, KEY_RESULTS_SHOW_LIMIT),
    [okr.keyResults]
  );

  const moreKeyResults = useMemo(
    () => okr.keyResults.length - KEY_RESULTS_SHOW_LIMIT,
    [okr.keyResults]
  );

  const hasOverflowedKeyResults = useMemo(
    () => moreKeyResults > 0,
    [moreKeyResults]
  );

  const isActive = useMemo(
    () => okr.status === OKRStatus.InProgress,
    [okr.status]
  );

  const renderCardLeft = () => <Avatar size={36} />;

  const renderCardRight = () => (
    <View
      style={[styles.indicator, isActive ? styles.active : styles.inactive]}
    />
  );

  return (
    <Card style={styles.card}>
      <Card.Title
        title={okr.name}
        subtitle={`${okr.type} ${okr.year}`}
        left={renderCardLeft}
        right={renderCardRight}
      />
      <Card.Content>
        {shownKeyResults.map(keyResult => (
          <KeyResult key={keyResult.name} {...keyResult} />
        ))}
        {hasOverflowedKeyResults && (
          <Text appearance={TextAppearance.HINT}>
            + {moreKeyResults} more Key Results
          </Text>
        )}
      </Card.Content>
    </Card>
  );
};

export default OKRCard;
