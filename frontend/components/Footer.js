const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <nav className="mt-4 space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
