const getAngleSum = (angleCount: number): number => {
  return Math.max(angleCount - 2, 0) * 180;
};

const getAngleValue = (angleCount: number): number => {
  return 180 - getAngleSum(angleCount) / angleCount;
};

export { getAngleSum, getAngleValue };
