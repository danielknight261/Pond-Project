import { UserContext } from "../components/UserContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const AccountPage = () => {
  const { ready, user } = useContext(UserContext);
  const router = useRouter();

  if (!user) {
    return "Loading...";
  }

  useEffect(() => {
    if (ready && !user) {
      router.push("LoginPage");
    }
  }, [ready, user, router]);


  

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
      <Link className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full" href="AccountPageProfile">My Profile</Link>
        <Link className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full" href="FavouritesPage">My Favourites</Link>
        <Link className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full" href="MediaPage">My Media</Link>
      </nav>

      
    </div>
  );
};

export default AccountPage;
