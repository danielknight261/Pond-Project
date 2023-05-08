import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const AccountPageProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  async function logout() {
    await axios.post('http://localhost:4000/logout');
    setUser(null);
    router.push('/');
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full" href="AccountPageProfile">My Profile</Link>
        <Link className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full" href="FavouritesPage">My Favourites</Link>
        <Link className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full" href="MediaPage">My Media</Link>
      </nav>
      <div className="text-center max-w-lg mx-auto">
        Logged in as {user.name} ({user.email})
        <button onClick={logout} className="w-full p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full max-w-sm mt-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPageProfile;
