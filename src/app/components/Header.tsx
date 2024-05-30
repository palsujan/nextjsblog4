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
    <div>Header</div>
  )
}

export default Header