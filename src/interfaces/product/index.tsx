
export interface Label {
  name: string;
}

export interface Category {
  name: string;
}

export interface Brand {
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  available: string;
  created: string;
  updated: string;
  brand: Brand;
  category: Category;
  label: Label;
}
