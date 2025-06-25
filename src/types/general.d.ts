import { ColorBadgeKeys } from './colors';

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  myContributions: string;
  badges: {
    name: string;
    color: ColorBadgeKeys;
  }[];
}
