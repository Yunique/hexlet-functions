//This program describes actions with rectangles and it's parts.

// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const getStartPoint = (rectangle) => car(rectangle);
export const getWidth = (rectangle) => car(cdr(rectangle));
export const getHeight = (rectangle) => cdr(cdr(rectangle));

export const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));
export const containsTheOrigin = (rectangle) => {
  const pWidth = getX(car(rectangle));
  const pHeight = getY(car(rectangle));

  const leftTop = getStartPoint(rectangle);
  const rightDown = makePoint(pWidth + getWidth(rectangle), pHeight - getHeight(rectangle));

  if ((quadrant(leftTop) === 2 && quadrant(rightDown) === 4)) return true;
  return false;
};
