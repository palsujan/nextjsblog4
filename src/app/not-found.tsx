import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>
        <p>Your page is not found</p>
        <Link href={"/"} className='border-b-[1px] border-b-gray-950 mt-2'>Back to Home</Link>
    </div>
  )
}

export default NotFoundPage