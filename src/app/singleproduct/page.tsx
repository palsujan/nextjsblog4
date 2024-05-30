// "use client"

import { getSingleProduct } from "@/helpers";
import Image from "next/image";

type Props = {
    searchParams:{ [key:string] : string | string[] | undefined}
}

const SingleProduct =async ({searchParams}:Props) => {
    // console.log(searchParams._id);
    const _idString = searchParams?._id;

    const _id = Number(_idString);
    const product = await getSingleProduct(_id);
    // console.log(product);

  return (
    <div>
        <Image src={product?.image} width={500} height={500} className="" alt="Product Image"/>
        <div className="">
            <p>{product?.title}</p>
        </div>
    </div>
  )
}

export default SingleProduct