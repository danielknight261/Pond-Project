// Define the Footer component
const Footer = () => {
  // Return the JSX markup for the Footer component
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        {/* Display the copyright text with the current year */}
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Pond All rights reserved.
        </p>
        {/* Render the navigation links */}
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

// Export the Footer component as the default export
export default Footer;
