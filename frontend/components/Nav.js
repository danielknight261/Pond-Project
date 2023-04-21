import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <input
              type="text"
              className="w-full py-2 px-3 bg-gray-900 rounded-md text-white placeholder-gray-500 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/">
                <button className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                  Explore
                </button>
              </Link>
              <Link href="/login">
                <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                  Login
                </button>
              </Link>
              <Link href="/upload">
                <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                  Upload
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
