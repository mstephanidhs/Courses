import { LoyaltyUser } from './enums';
import { Country, Price } from './types';

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description?: string;
}

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}
