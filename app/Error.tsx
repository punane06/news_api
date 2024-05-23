'use client'
import Link from 'next/link'

const error = ({message}: {message: any}) => {
  return (

    <div className="flex justify-center pt-10 text-lg text-center">
      {message == 'Request failed with status code 401' ? 
      <p>Your login failed. <br /> Go back to <Link href={'/'} className='mx-2 text-blue-400 underline hover:text-gray-300'>LogIn</Link> page.</p>
      
      
      : <p> Error: {message}</p>}
      </div>
  )
}

export default error
