import Title from "@/components/Title";
import Products from "../components/Products";

const getData = async()=>{
  const res = await fetch("https://jsonserver.reactbd.com/phone")
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
};
export default async function Home() {
  const products = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title title="Get your favourite phone"/>
      <Products products = {products}/>
    </main>
  );
}
