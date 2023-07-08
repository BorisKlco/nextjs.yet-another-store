import { Product } from "@/components";
import fetchProduct from "@/components/fetchProduct";
import { ProductProps } from "@/types/indes";

export default async function Home() {
  const data = await fetchProduct();
  return (
    <main className="my-8 mx-1">
      {data.map((item: ProductProps) => (
        <Product key={item.url} {...item} />
      ))}
    </main>
  );
}
