export interface Product {
  id: string;
  category_id: string;
  created_at: string;
  deleted_at: string | null;
  description: string | null;
  image: string | null;
  is_active: number | boolean; // Dependiendo de si usas número (0/1) o booleano
  name: string;
  price: string; // O podrías usar number si conviertes el string
  sku: string;
  slug: string;
  stock: number;
  updated_at: string;
}