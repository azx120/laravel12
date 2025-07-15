export interface Product {
  id: string;
  category_id: string;
  category?: Category;
  name: string;
  slug: string;
  sku: string;
  description: string | null;
  price: string; // O puedes usar `number` si conviertes el string
  stock: number;
  image: string;
  gallery: string; // O considera usar `string[]` si es un JSON parseado
  is_active: number | boolean; // Depende de cómo lo uses (1/0 o true/false)
  created_at: string; // O usa `Date` si lo conviertes
  updated_at: string;
  deleted_at: string | null;
}

// Para las categorías
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}