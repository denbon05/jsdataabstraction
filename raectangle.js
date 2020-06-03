#!/usr/bin/env node
import { makeDecartPoint, getX, getY, getQuadrant } from './points.js';

const getStartPoint = (point) => point.start;
const getWidth = (p, w) => getX(p) + w;
const getHeight = (p, h) => getY(p) - h;
const makeRectangle = (p, width, height) => {
  const x = getWidth(p, width);
  const y = getHeight(p, height);
  return { start: p, end: makeDecartPoint(x, y) };
};
const containsOrigin = (rectangle) => {
  const startQuadrant = getQuadrant(getStartPoint(rectangle));
  const endQuadrant = getQuadrant(rectangle.end);
  return startQuadrant === 2 && endQuadrant === 4;
};

export { makeRectangle, containsOrigin };