import { UserContext } from "../components/UserContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const AccountPage = () => {
  const { ready, user } = useContext(UserContext);
  const router = useRouter();

  // Check if the user is not available yet, show a loading message
  if (!user) {
    return "Loading...";
  }

  useEffect(() => {
    // Redirect to the login page if the user is not ready and not logged in
    if (ready && !user) {
      router.push("LoginPage");
    }
  }, [ready, user, router]);

  return (
    <div>
      {/* Account Page Nav Container */}
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        {/* Link to the account page profile */}
        <Link
          className="inline-flex gap-1 p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full"
          href="AccountPageProfile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          My Profile
        </Link>

        {/* Link to the favorites page */}
        <Link
          className="inline-flex gap-1 p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full"
          href="FavouritesPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          My Favourites
        </Link>

        {/* Link to the media page */}
        <Link
          className="inline-flex gap-1 p-2 px-6 bg-red-400 hover:bg-red-100 rounded-full"
          href="MyMediaPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          My Media
        </Link>
      </nav>

      
    </div>
  );
};

export default AccountPage;
