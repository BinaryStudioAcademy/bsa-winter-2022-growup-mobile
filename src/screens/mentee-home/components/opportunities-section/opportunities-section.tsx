import React from 'react';
import { View } from 'react-native';

import { HeadingLevel } from 'src/common/enums';
import { IOpportunity } from 'src/common/types';
import { Heading, OpportunityCard } from 'src/components';
import useStyles from './styles';

type OpportunitiesSectionProps = {
  opportunities: IOpportunity[];
  onDetails: (id: string) => void;
};

const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  opportunities,
  onDetails,
}) => {
  const styles = useStyles();

  return (
    <View>
      <Heading level={HeadingLevel.H6}>
        We have some good opportunities for you!
      </Heading>
      {opportunities.map(opportunity => (
        <View style={styles.cardWrapper} key={opportunity.id}>
          <OpportunityCard
            opportunity={opportunity}
            onDetails={() => onDetails(opportunity.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default OpportunitiesSection;
