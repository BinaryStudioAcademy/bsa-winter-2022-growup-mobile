import React, { useCallback, useMemo } from 'react';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

import { IPoint, IPolarPoint } from 'src/common/types';
import { getAngleValue, polarToCartesian } from 'src/helpers';
import { useColor } from 'src/hooks';

type Axis = {
  score: number;
  name: string;
};

type RadarChartProps = {
  chartSize: number;
  startAngle: number;
  maxScore: number;
  axes: Axis[];
};

const RadarChart: React.FC<RadarChartProps> = ({
  chartSize,
  startAngle = 0,
  maxScore,
  axes,
}) => {
  const colorHint = useColor('HINT');
  // const colorPrimary = useColor('PRIMARY');

  const center = useMemo<IPoint>(
    () => ({ x: chartSize / 2, y: chartSize / 2 }),
    [chartSize]
  );

  const chartArea = useMemo(() => chartSize * (5 / 6), [chartSize]);

  const drawNAngle = useCallback(
    (context: CanvasRenderingContext2D, angles: number, radius: number) => {
      const angleValue = getAngleValue(angles);

      const points = new Array(angles).map((_, i) => {
        const angle = angleValue * i + startAngle;
        const polar: IPolarPoint = { r: radius, angle };
        const cartesian = polarToCartesian(polar, center);

        return cartesian;
      });

      points.reduce((prev, point) => {
        if (!prev) {
          context.moveTo(point.x, point.y);
          return point;
        }

        context.lineTo(point.x, point.y);
        return point;
      });

      context.stroke();
    },
    [center, startAngle]
  );

  const drawChart = useCallback(
    (canvas: Canvas) => {
      const context = canvas.getContext('2d');

      context.lineWidth = 1;
      context.strokeStyle = colorHint;

      const figurePadding = chartArea / maxScore;
      const angles = axes.length;

      for (let i = 1; i <= maxScore; i++) {
        const radius = figurePadding * i;
        drawNAngle(context, angles, radius);
      }
    },
    [chartArea, maxScore, axes, colorHint, drawNAngle]
  );

  return (
    <Canvas ref={drawChart} style={{ width: chartSize, height: chartSize }} />
  );
};

export default RadarChart;
