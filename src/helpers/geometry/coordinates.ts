import { IPoint, IPolarPoint } from 'src/common/types';

const polarToCartesian = (polar: IPolarPoint, center: IPoint): IPoint => {
  const deltaX = polar.r * Math.cos(polar.angle);
  const deltaY = polar.r * Math.sin(polar.angle);

  return {
    x: deltaX + center.x,
    y: deltaY + center.y,
  };
};

export { polarToCartesian };
