import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';

import { OKRStatus, TextAppearance } from 'src/common/enums';
import { IOkr } from 'src/common/types';
import { Text, Avatar } from 'src/components';
import { KeyResult } from '..';
import styles from './styles';

const KeyResultS_SHOW_LIMIT = 2;

type OKRCardProps = {
  okr: IOkr;
};

const OKRCard: React.FC<OKRCardProps> = ({ okr }) => {
  const shownKeyResults = useMemo(
    () => okr.keyResults.slice(0, KeyResultS_SHOW_LIMIT),
    [okr.keyResults]
  );

  const moreKeyResults = useMemo(
    () => okr.keyResults.length - KeyResultS_SHOW_LIMIT,
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

  return (
    <Card>
      <Card.Title
        title={okr.name}
        subtitle={`${okr.type} ${okr.year}`}
        left={() => <Avatar size={36} />}
        right={() => (
          <View
            style={[
              styles.indicator,
              isActive ? styles.active : styles.inactive,
            ]}
          />
        )}
      />
      <Card.Content>
        {shownKeyResults.map(keyResult => (
          <KeyResult key={keyResult.name} keyResult={keyResult} />
        ))}
        {hasOverflowedKeyResults ? (
          <Text appearance={TextAppearance.HINT}>
            + {moreKeyResults} more Key Results
          </Text>
        ) : null}
      </Card.Content>
    </Card>
  );
};

export default OKRCard;
