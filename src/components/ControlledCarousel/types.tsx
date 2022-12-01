export interface CarouselOpts {
  items: CarouselItem[];
}

export interface CarouselItem {
  source: string;
  caption: string;
}

export const NewCarouselItem = (source?: string, caption?: string): CarouselItem => {
  return { source: source || 'undefined', caption: caption || 'undefined' };
};
