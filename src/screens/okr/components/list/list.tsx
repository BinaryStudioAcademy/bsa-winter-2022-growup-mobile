import React from 'react';
import { FlatList, View } from 'react-native';

import { HeadingLevel } from 'src/common/enums';
import { IOkr } from 'src/common/types';
import { Heading } from 'src/components';
import { OKRCard } from '..';
import useStyles from './styles';

type OKRListProps = {
  data: IOkr[];
};

const OKRList: React.FC<OKRListProps> = ({ data }) => {
  const styles = useStyles();

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={styles.cardDivider} />}
      ListHeaderComponent={
        <Heading style={styles.header} level={HeadingLevel.H5}>
          OKRs
        </Heading>
      }
      renderItem={({ item }) => <OKRCard okr={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default OKRList;
