const fetchProduct = async () => {
  const header = {
    apikey: process.env.APIKEY!,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkeGdqZG5qdnBwY2xjYmVueHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMTkxNzgsImV4cCI6MjAwMzc5NTE3OH0.X853hhuh9p6Tv5rZ08-uAPVwX7ZxMeW24opqqg-9R5c",
  };

  const req = await fetch(
    "https://kdxgjdnjvppclcbenxqi.supabase.co/rest/v1/product?select=*",
    { headers: header }
  );

  console.log(header);

  return req.json();
};

export default fetchProduct;
