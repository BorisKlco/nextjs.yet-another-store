export async function getStaticProps() {
  const header = {
    apikey: process.env.APIKEY!,
  };

  const req = await fetch(
    "https://kdxgjdnjvppclcbenxqi.supabase.co/rest/v1/product?select=*",
    { headers: header }
  );

  const data = req.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ props }) {
  console.log(props);
  return (
    <main className="bg-white">
      <h2>Page.tsx</h2>
    </main>
  );
}
