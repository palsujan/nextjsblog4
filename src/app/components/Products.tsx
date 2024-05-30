'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ProductProps {
    _id: number,
    title:string,
    description: string,
    category: string,
    image: string,       
    isNew: boolean,
    brand: string,
    price:number,
}
interface Props{
    products:ProductProps[]
}
const Products = ({products}: Props) => {
    // console.log(products);
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
        {
            products.map((item)=>(
                <Link href={"/"} key={item?._id}>
                    <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
                        <Image src={item?.image} width={500} height={500} alt='Product Images' className='w-full h-80 object-cover'/>
                        <div className="px-4 pb-2 text-sm flex flex-col gap-1">
                            <p className='text-gray-600'>{item?.title}</p>
                            <p className='font-semibold'>$ {item?.price}</p>
                            <div className="flex justify-between items-center">
                                <button className=''>Add to cart</button>
                                <button className='uppercase text-xs font-semibold hover:text-blue-700 duration-200'>More Info</button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Products