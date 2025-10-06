export interface House {
  id?: number;
  title: string;
  description: string;
  price: number;
  address: string;
  owner_id: number; // id del arrendador
  is_rented: boolean;
}