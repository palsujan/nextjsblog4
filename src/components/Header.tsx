import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const Header = () => {
    const navigation = [
        {
            _id:1,
            title:"Phone",
            href:"/",
        },
        {
            _id:2,
            title:"Phone Case",
            href:"/phonecase",
        },
        {
            _id:3,
            title:"Watches",
            href:"/watches",
        },
        {
            _id:4,
            title:"Accessories",
            href:"/accessories",
        }
        

    ]
  return (
    <div className="w-full h-20 bg-gray-950 text-gray-200 top-0 z-50">
        <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-5">
            {navigation.map((item)=>(
                <Link 
                    href={item?.href}
                    key={item?._id}
                    className="uppercase text-sm hover:text-while duration-200"
                >
                    {item?.title}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Header