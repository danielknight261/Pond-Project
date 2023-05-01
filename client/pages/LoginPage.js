import React from 'react'
import Link from 'next/link';
import Register from './Register'

const LoginPage = () => {
  return (
    <div className="mt-4 ">
    <h1 className="text-4xl text-center mb-4">Login</h1>
    <form className="max-w-md mx-auto">
      <input className="p-2" type="email" placeholder="your@email.com" />
      <input className="p-2" type="password" placeholder="password" />
      <button className="bg-red-400 p-2 w-full text-white rounded-2xl">Login</button>
      <Link href="Register">
      <div>Don't have an account yet ?</div>
      </Link>
    </form>
      
    </div>
  )
}

export default LoginPage
