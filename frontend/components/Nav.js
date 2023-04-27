// Import required dependencies
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

// Define the Nav component
const Nav = () => {
  // Use the Auth0 useUser hook to get user information
  const { user, error, isLoading } = useUser();

  // Set the upload link based on whether the user is logged in or not
  const uploadLink = user ? "/Upload" : "/api/auth/login";

  // Render the Nav component
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Render the logo */}
          <div className="flex-shrink-0">
            <img className="h-10" src="/logo.jpg" alt="Logo" />
          </div>
          {/* Render the search input */}
          <div className="ml-4 flex items-center md:ml-6">
            <input
              type="text"
              className="w-full py-2 px-3 bg-gray-900 rounded-md text-white placeholder-gray-500 focus:outline-none"
              placeholder="Search"
            />
          </div>
          {/* Render the navigation buttons */}
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Explore button */}
              <Link href="/">
                <button className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                  Explore
                </button>
              </Link>

              {/* Login/Logout button based on user's authentication state */}
              {user ? (
                <Link href="/api/auth/logout">
                  <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                    Logout
                  </button>
                </Link>
              ) : (
                <Link href="/api/auth/login">
                  <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                    Login
                  </button>
                </Link>
              )}

              {/* Upload button with conditional link */}
              <Link href={uploadLink}>
                {user ? (
                  <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                    Upload
                  </button>
                ) : (
                  <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 cursor-pointer">
                    Upload
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Export the Nav component as the default export
export default Nav;
