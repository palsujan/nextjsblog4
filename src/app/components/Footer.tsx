import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-fll h-10 text-sm bg-gray-950 flex flex-col text-gray-200 py-10">
        <p className="text-center">All rights reserved - Developed by <Link href="https://www.sujanpal.in/" target='newtab'>Sujan Pal</Link></p>
    </div>
  )
}

export default Footer