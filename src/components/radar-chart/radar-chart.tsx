import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

import { IPoint, IPolarPoint } from 'src/common/types';
import { getAngleValue, polarToCartesian, normalizeAngle } from 'src/helpers';
import { useColor } from 'src/hooks';

type Axis = {
  score: number;
  name: string;
};

type RadarChartProps = {
  chartSize: number;
  maxScore: number;
  axes: Axis[];
};

const RadarChart: React.FC<RadarChartProps> = ({
  chartSize,
  maxScore,
  axes,
}) => {
  const canvasRef = useRef<Canvas | null>(null);

  const colorHint = useColor('HINT');
  const colorWhite = useColor('WHITE');
  // const colorPrimary = useColor('PRIMARY');

  const halfSize = useMemo(() => chartSize / 2, [chartSize]);

  const center = useMemo<IPoint>(
    () => ({ x: halfSize, y: halfSize }),
    [halfSize]
  );

  const chartArea = useMemo(() => halfSize * (5 / 6), [halfSize]);

  const drawNAngle = useCallback(
    (context: CanvasRenderingContext2D, angles: number, radius: number) => {
      const angleValue = getAngleValue(angles);

      const points = new Array(angles + 1).fill(0).map((_, i) => {
        const angle = normalizeAngle(angleValue * i);
        const polar: IPolarPoint = { r: radius, angle };
        const cartesian = polarToCartesian(polar, center);

        return cartesian;
      });

      points.reduce((prev, point) => {
        if (!prev) {
          return point;
        }

        context.moveTo(prev.x, prev.y);
        context.lineTo(point.x, point.y);
        return point;
      });

      context.stroke();
    },
    [center]
  );

  const drawChart = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.fillStyle = colorWhite;
      context.fillRect(0, 0, chartSize, chartSize);

      context.lineWidth = 2;
      context.strokeStyle = colorHint;

      const figurePadding = chartArea / maxScore;
      const angles = axes.length;

      for (let i = 1; i <= maxScore; i++) {
        const radius = figurePadding * i;
        drawNAngle(context, angles, radius);
      }
    },
    [chartSize, maxScore, axes, chartArea, colorHint, colorWhite, drawNAngle]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    canvasRef.current.width = chartSize;
    canvasRef.current.height = chartSize;

    const context = canvasRef.current.getContext('2d');
    drawChart(context);
  }, [chartSize, colorHint, canvasRef, drawChart]);

  return <Canvas ref={canvasRef} />;
};

export default RadarChart;
