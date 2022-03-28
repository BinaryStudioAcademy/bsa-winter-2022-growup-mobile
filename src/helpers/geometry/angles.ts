const degreesToRadians = (angle: number): number => {
  return angle * (Math.PI / 180);
};

const normalizeAngle = (angle: number): number => {
  angle = angle % 360;
  return angle > 180 ? angle - 360 : angle;
};

export { degreesToRadians, normalizeAngle };
