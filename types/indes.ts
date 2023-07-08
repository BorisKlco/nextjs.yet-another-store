export interface ProductProps {
  id: number;
  name: string;
  desc: string;
  price: number;
  files: { images: string[] };
  url: string;
}
