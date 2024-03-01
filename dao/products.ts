export interface ProductsResponse {
  products: Product[];
  brands: string[];
  sub_categories: string[];
}

export interface Product {
  category: string;
  sub_category: string;
  brand: string;
  name: string;
  image: string;
}

export interface HeadlineData {
  key: string;
  title: string;
  headline: string;
}
