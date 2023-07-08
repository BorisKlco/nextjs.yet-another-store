import { Product } from "@/components";
import fetchProduct from "@/components/fetchProduct";
import { ProductProps } from "@/types/indes";

export default async function Home() {
  const data = await fetchProduct();
  return (
    <main className="bg-white">
      <h2>Page.tsx</h2>
      {data.map((item: ProductProps) => (
        <Product key={item.url} {...item} />
      ))}
    </main>
  );
}
