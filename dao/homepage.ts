export interface HomePage {
  testimonies: Testimony[];
  coverage_map: string;
  statistics: Statistic[];
  certificates: Certificate[];
  portfolio: string;
}

export interface Testimony {
  brand: string;
  brand_logo: string;
  heading: string;
  description: string;
}

export interface Statistic {
  name: string;
  number: number;
}

export interface Certificate {
  name: string;
  image: string;
}
