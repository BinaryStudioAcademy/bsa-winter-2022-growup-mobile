import React, { useMemo } from 'react';
import { Card } from 'react-native-paper';

import { TextAppearance } from 'src/common/enums';
import { IOkr } from 'src/common/types';
import { Text, Avatar } from 'src/components';
import { Objective } from '..';
import useStyles from './styles';

const OBJECTIVES_SHOW_LIMIT = 2;

type OKRCardProps = {
  okr: IOkr;
};

const OKRCard: React.FC<OKRCardProps> = ({ okr }) => {
  const styles = useStyles();

  const shownObjectives = useMemo(
    () => okr.objectives.slice(0, OBJECTIVES_SHOW_LIMIT),
    [okr.objectives]
  );

  const moreObjectives = useMemo(
    () => okr.objectives.length - OBJECTIVES_SHOW_LIMIT,
    [okr.objectives]
  );

  const hasOverflowedObjectives = useMemo(
    () => moreObjectives > 0,
    [moreObjectives]
  );

  const renderCardLeft = () => <Avatar size={36} />;

  return (
    <Card style={styles.card}>
      <Card.Title title={okr.name} subtitle={okr.type} left={renderCardLeft} />
      <Card.Content>
        {shownObjectives.map(keyResult => (
          <Objective key={keyResult.name} keyResult={keyResult} />
        ))}
        {hasOverflowedObjectives && (
          <Text appearance={TextAppearance.HINT}>
            + {moreObjectives} more Objectives
          </Text>
        )}
      </Card.Content>
    </Card>
  );
};

export default OKRCard;
