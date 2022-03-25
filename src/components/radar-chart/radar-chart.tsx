import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

import {
  SCALE_FRACTION,
  TEXT_SIZE_FRACTION,
  TEXT_MAX_WIDTH_FRACTION,
  TEXT_POSITION_FRACTION,
} from 'src/common/constants';

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
  const colorBlack = useColor('BLACK');
  // const colorPrimary = useColor('PRIMARY');

  const halfSize = useMemo(() => chartSize / 2, [chartSize]);

  const center = useMemo<IPoint>(
    () => ({ x: halfSize, y: halfSize }),
    [halfSize]
  );

  const chartArea = useMemo(() => chartSize * SCALE_FRACTION, [chartSize]);

  const textRadius = useMemo(
    () => chartSize * TEXT_POSITION_FRACTION,
    [chartSize]
  );

  const textSize = useMemo(() => chartSize * TEXT_SIZE_FRACTION, [chartSize]);

  const textMaxWith = useMemo(
    () => chartSize * TEXT_MAX_WIDTH_FRACTION,
    [chartSize]
  );

  const drawNAngle = useCallback(
    (
      context: CanvasRenderingContext2D,
      angles: number,
      angleValue: number,
      radius: number
    ) => {
      const cycledPointsCount = angles + 1;

      const points = new Array(cycledPointsCount).fill(0).map((_, i) => {
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
    },
    [center]
  );

  const drawText = useCallback(
    (context: CanvasRenderingContext2D, text: string, angle: number) => {
      const polar: IPolarPoint = { r: textRadius, angle };
      const cartesian = polarToCartesian(polar, center);

      context.fillText(text, cartesian.x, cartesian.y, textMaxWith);
    },
    [center, textRadius, textMaxWith]
  );

  const drawChart = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.fillStyle = colorWhite;
      context.fillRect(0, 0, chartSize, chartSize);

      context.lineWidth = 2;
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      context.lineJoin = 'round';
      context.fillStyle = colorBlack;
      context.strokeStyle = colorHint;
      context.font = `${textSize}px Arial`;

      const angles = axes.length;
      const figurePadding = chartArea / maxScore;
      const angleValue = getAngleValue(angles);

      for (let i = 1; i <= maxScore; i++) {
        const radius = figurePadding * i;
        drawNAngle(context, angles, angleValue, radius);
      }

      for (let i = 0; i < angles; i++) {
        const angle = angleValue * i;
        drawText(context, axes[i].name, angle);
      }

      context.stroke();
    },
    [
      chartSize,
      maxScore,
      axes,
      chartArea,
      textSize,
      colorHint,
      colorWhite,
      colorBlack,
      drawNAngle,
      drawText,
    ]
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
