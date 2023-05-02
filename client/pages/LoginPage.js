import React from 'react'
import Link from 'next/link';
import Register from './RegisterPage'

const LoginPage = () => {
  return (
    <div className="mt-4 ">
    <h1 className="text-4xl text-center mb-4">Login</h1>
    <form className="max-w-md mx-auto">
      <input className="p-2" type="email" placeholder="your@email.com" />
      <input className="p-2" type="password" placeholder="password" />
      <button className="bg-red-400 p-2 w-full text-white rounded-2xl">Login</button>
      
      <div className="text-center py-2 text-gray-500">Don't have an account yet ? <Link href="RegisterPage" className="underline text-black">Register now</Link></div>
      
    </form>
      
    </div>
  )
}

export default LoginPage
