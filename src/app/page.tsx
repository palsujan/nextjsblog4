const getData = async()=>{
  const res = await fetch("https://jsonserver.reactbd.com/phone")
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
}
export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-center py-10 text-lg">Products will go here</p>
    </main>
  );
}
