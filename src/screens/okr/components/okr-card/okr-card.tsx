import React, { useMemo } from 'react';
import { View } from 'react-native';

import { HeadingLevel, TextAppearance } from 'src/common/enums';
import { IOkr } from 'src/common/types';
import { Heading, Text, Avatar } from 'src/components';
import { Objective } from '..';
import styles from './styles';

const OBJECTIVES_SHOW_LIMIT = 2;

type OKRCardProps = {
  okr: IOkr;
};

const OKRCard: React.FC<OKRCardProps> = ({ okr }) => {
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

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Avatar url={okr.avatarUrl} size={36} />
          <View style={styles.texts}>
            <Heading level={HeadingLevel.H6} style={styles.spaceVert}>
              {okr.name}
            </Heading>
            <Text appearance={TextAppearance.HINT}>
              {okr.type} {okr.year}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.indicator,
            okr.inProgress ? styles.active : styles.inactive,
          ]}
        />
      </View>
      {shownObjectives.map(objective => (
        <Objective key={objective.name} objective={objective} />
      ))}
      {hasOverflowedObjectives ? (
        <Text>+ {moreObjectives} more Key Results</Text>
      ) : null}
    </View>
  );
};

export default OKRCard;
