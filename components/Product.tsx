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

const Product = ({ props }) => {
  console.log(props);
  return "Loading";
};

export default Product;
