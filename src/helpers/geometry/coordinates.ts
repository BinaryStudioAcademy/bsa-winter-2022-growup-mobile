import { IPoint, IPolarPoint } from 'src/common/types';
import { degreesToRadians } from './angles';

const polarToCartesian = (polar: IPolarPoint, center: IPoint): IPoint => {
  const radians = degreesToRadians(polar.angle);

  const deltaX = polar.r * Math.cos(radians);
  const deltaY = polar.r * Math.sin(radians);

  return {
    x: deltaX + center.x,
    y: deltaY + center.y,
  };
};

export { polarToCartesian };
