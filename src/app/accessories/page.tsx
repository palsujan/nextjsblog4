import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/accessories")
    if(!res.ok){
      throw new Error("Failed to fetch data")
    }
    return res.json();
  };

const Accessories = async() => {
    const products = await getData();
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Title title="Find your favourite Watches"/>
        <Products products = {products}/>
      </div>
    );
}

export default Accessories