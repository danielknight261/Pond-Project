import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UserContext } from '../components/UserContext';


const LoginPage = () => {

  const [email, setEmail] =useState('');
  const [password, setPassword] = useState ('');
  const [redirect, setRedirect] = useState (true);
  const {setUser} = useContext(UserContext);

  const router = useRouter();

  // useEffect(() => {
  //   if (redirect) {
  //     router.push('/');
  //   }
  // }, [redirect]);

  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
     const {data} = await axios.post("http://localhost:4000/login", { email, password });
     setUser(data);

    alert('Login Successful');
    setRedirect(true)
    }catch (e) {
      alert('Login failed')
    }
  }

  axios.defaults.withCredentials = true;

  return (
    <div className="mt-4 ">
    <h1 className="text-4xl text-center mb-4">Login</h1>
    <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>

      <input 
      className="p-2" 
      type="email" 
      placeholder="your@email.com" 
      value={email}
      onChange={ev => setEmail(ev.target.value)}
      />
      
      <input 
      className="p-2" 
      type="password" 
      placeholder="password"
      value={password}
      onChange={ev => setPassword(ev.target.value)} 
      />

      <button className="bg-red-400 p-2 w-full text-white rounded-2xl">Login</button>
      
      <div className="text-center py-2 text-gray-500">Don't have an account yet ? <Link href="RegisterPage" className="underline text-black">Register now</Link></div>
      
    </form>
      
    </div>
  )
}

export default LoginPage
