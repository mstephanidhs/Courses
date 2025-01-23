import { Review } from './interfaces';

export default class MainProperty {
  src: string;
  title: string;
  reviews: Review[];

  constructor(src: string, title: string, reviews: Review[]) {
    this.reviews = reviews;
    this.src = src;
    this.title = title;
  }
}
