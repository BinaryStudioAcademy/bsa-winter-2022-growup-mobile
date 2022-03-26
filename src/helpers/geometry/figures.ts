const getOutAngleSum = (angleCount: number): number => {
  return Math.max(angleCount - 2, 0) * 180;
};

const getInAngleValue = (angleCount: number): number => {
  return 180 - getOutAngleSum(angleCount) / angleCount;
};

export { getOutAngleSum, getInAngleValue };
