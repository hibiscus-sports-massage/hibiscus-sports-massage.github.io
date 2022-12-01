import { isFunction } from 'lodash';
import { CarouselItem, NewCarouselItem } from '../../components/ControlledCarousel/types';

/**
 * Helper to generate many of some type
 */
export const make = <T, Overloads>(
  count: number,
  f: (p?: Overloads) => T,
  overloads?: Overloads | ((index: number) => Overloads),
): T[] => {
  return new Array(count).fill(0).map((_, i) => (isFunction(overloads) ? f(overloads(i)) : f(overloads)));
};

export const components = {
  carouselItem: (overrides?: Partial<CarouselItem>): CarouselItem =>
    NewCarouselItem(overrides?.source, overrides?.caption),
};
