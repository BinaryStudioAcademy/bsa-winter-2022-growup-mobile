import { IPoint, IPolarPoint } from 'src/common/types';
import { degreesToRadians } from './angles';

const polarToCartesian = (polar: IPolarPoint, center: IPoint): IPoint => {
  const deltaX = polar.r * Math.cos(degreesToRadians(polar.angle));
  const deltaY = polar.r * Math.sin(degreesToRadians(polar.angle));

  return {
    x: deltaX + center.x,
    y: deltaY + center.y,
  };
};

export { polarToCartesian };
