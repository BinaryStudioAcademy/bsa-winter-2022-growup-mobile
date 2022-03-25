import React, { useCallback } from 'react';

import Canvas from 'react-native-canvas';

const RadarChart: React.FC = () => {
  const drawChart = useCallback((_canvas: Canvas) => {
    /* TODO */
  }, []);

  return <Canvas ref={drawChart} />;
};

export default RadarChart;
