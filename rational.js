//Actions with rational numbers by using pairs.

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';


export const make = (numer, denom) => cons(numer, denom);

export const numer = (pair) => car(pair);
export const denom = (pair) => cdr(pair);

export const toString = (pair) => `${numer(pair)} / ${denom(pair)}`;

export const isEqual = (pair1, pair2) => numer(pair1) * denom(pair2) === numer(pair2) * denom(pair1);

export const add = (pair1, pair2) => make(numer(pair1) * denom(pair2) + denom(pair1) * numer(pair2), denom(pair1) * denom(pair2));
export const sub = (pair1, pair2) => make(numer(pair1) * denom(pair2) - denom(pair1) * numer(pair2), denom(pair1) * denom(pair2));
export const mul = (pair1, pair2) => make(numer(pair1) * numer(pair2), denom(pair1) * denom(pair2));
export const div = (pair1, pair2) => make(numer(pair1) * denom(pair2), numer(pair2) * denom(pair1));
