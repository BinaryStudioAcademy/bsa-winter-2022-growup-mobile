import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

import {
  SCALE_FRACTION,
  LINE_SIZE_FRACTION,
  TEXT_SIZE_FRACTION,
  TEXT_MAX_WIDTH_FRACTION,
  TEXT_POSITION_FRACTION,
  SCOREPOINT_SIZE_FRACTION,
} from 'src/common/constants';

import { IPoint, IPolarPoint } from 'src/common/types';
import { getInAngleValue, polarToCartesian, normalizeAngle } from 'src/helpers';
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
  const colorPrimary = useColor('PRIMARY');
  const colorChartArea = useColor('CHART_AREA');

  const halfSize = useMemo(() => chartSize / 2, [chartSize]);

  const center = useMemo<IPoint>(
    () => ({ x: halfSize, y: halfSize }),
    [halfSize]
  );

  const chartArea = useMemo(() => chartSize * SCALE_FRACTION, [chartSize]);
  const lineSize = useMemo(() => chartSize * LINE_SIZE_FRACTION, [chartSize]);

  const textRadius = useMemo(
    () => chartSize * TEXT_POSITION_FRACTION,
    [chartSize]
  );

  const textSize = useMemo(() => chartSize * TEXT_SIZE_FRACTION, [chartSize]);

  const textMaxWidth = useMemo(
    () => chartSize * TEXT_MAX_WIDTH_FRACTION,
    [chartSize]
  );

  const cyclePadding = useMemo(
    () => chartArea / maxScore,
    [chartArea, maxScore]
  );

  const scorepointSize = useMemo(
    () => chartSize * SCOREPOINT_SIZE_FRACTION,
    [chartSize]
  );

  const drawNAngle = useCallback(
    (
      context: CanvasRenderingContext2D,
      angles: number,
      angleValue: number,
      radius: number
    ) => {
      const points = new Array(angles).fill(0).map((_, i) => {
        const angle = normalizeAngle(angleValue * i);
        const polar: IPolarPoint = { r: radius, angle };
        const cartesian = polarToCartesian(polar, center);

        return cartesian;
      });

      [...points, points[0]].reduce((prev, point) => {
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

      context.fillText(text, cartesian.x, cartesian.y, textMaxWidth);
    },
    [center, textRadius, textMaxWidth]
  );

  const drawScorepoint = useCallback(
    (
      context: CanvasRenderingContext2D,
      angleValue: number,
      angleIndex: number,
      score: number
    ) => {
      const polar: IPolarPoint = {
        r: score * cyclePadding,
        angle: angleValue * angleIndex,
      };

      const cicrleCenter = polarToCartesian(polar, center);
      const { x, y } = cicrleCenter;

      context.moveTo(x, y);
      context.arc(x, y, scorepointSize, 0, 2 * Math.PI);

      return cicrleCenter;
    },
    [center, cyclePadding, scorepointSize]
  );

  const drawScoreArea = useCallback(
    (context: CanvasRenderingContext2D, positions: IPoint[]) => {
      [...positions, positions[0]].reduce((prev, point) => {
        if (!prev) {
          context.moveTo(point.x, point.y);
          return point;
        }

        context.lineTo(point.x, point.y);

        return point;
      });
    },
    []
  );

  const drawChart = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.fillStyle = colorWhite;
      context.fillRect(0, 0, chartSize, chartSize);

      context.lineWidth = lineSize;
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      context.lineJoin = 'round';
      context.fillStyle = colorBlack;
      context.strokeStyle = colorHint;
      context.font = `${textSize}px Arial`;

      const angles = axes.length;
      const angleValue = getInAngleValue(angles);

      context.beginPath();

      for (let i = 1; i <= maxScore; i++) {
        const radius = cyclePadding * i;
        drawNAngle(context, angles, angleValue, radius);
      }

      for (let i = 0; i < angles; i++) {
        const angle = angleValue * i;
        drawText(context, axes[i].name, angle);
      }

      context.closePath();
      context.stroke();

      context.fillStyle = colorPrimary;
      context.strokeStyle = colorPrimary;

      context.beginPath();

      const scorepointPositions = axes.map((axis, i) => {
        return drawScorepoint(
          context,
          angleValue,
          i,
          Math.min(axis.score, maxScore)
        );
      });

      context.closePath();
      context.stroke();
      context.fill();

      context.fillStyle = colorChartArea;

      context.beginPath();

      drawScoreArea(context, scorepointPositions);

      context.closePath();
      context.stroke();
      context.fill();
    },
    [
      axes,
      chartSize,
      maxScore,
      lineSize,
      cyclePadding,
      textSize,
      colorHint,
      colorWhite,
      colorBlack,
      colorPrimary,
      colorChartArea,
      drawNAngle,
      drawText,
      drawScorepoint,
      drawScoreArea,
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
