import Products from "@/components/Products";
import Title from "@/components/Title";

const getData = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phonecase")
    if(!res.ok){
      throw new Error("Failed to fetch data")
    }
    return res.json();
  };

const Phonecase = async() => {
    const products = await getData();
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Title title="Make your phone looks cool with beautiful Phone Case"/>
        <Products products = {products}/>
      </div>
    );
}

export default Phonecase;