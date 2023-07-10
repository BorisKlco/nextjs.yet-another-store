const fetchProduct = async () => {
  const header = {
    apikey: process.env.APIKEY!,
  };

  const req = await fetch(
    "https://kdxgjdnjvppclcbenxqi.supabase.co/rest/v1/product?select=*",
    { headers: header }
  );

  return req.json();
};

export default fetchProduct;
