import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UserContext } from '../components/UserContext';

// Define the LoginPage component
const LoginPage = () => {
  // Define state variables using useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  // Get the router instance from Next.js
  const router = useRouter();

  // Use useEffect to redirect to the homepage if redirect state is true
  useEffect(() => {
    if (redirect) {
      router.push('/');
    }
  }, [redirect]);

  // Function to handle the login form submission
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      // Send a POST request to the login endpoint
      const { data } = await axios.post('http://localhost:4000/login', { email, password });

      // Set the user data in the UserContext
      setUser(data);

      // Display a success message and set redirect state to true
      alert('Login Successful');
      setRedirect(true);
    } catch (e) {
      // Display an error message if login fails
      alert('Login failed');
    }
  }

  // Set axios to send requests with credentials
  axios.defaults.withCredentials = true;

  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
        {/* Email input */}
        <input
          className="p-2"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        {/* Password input */}
        <input
          className="p-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        {/* Login button */}
        <button className="bg-red-400 p-2 w-full text-white rounded-2xl">Login</button>

        {/* Registration link */}
        <div className="text-center py-2 text-gray-500">
          Don't have an account yet ?{' '}
          <Link href="RegisterPage" className="underline text-black">
            Register now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
