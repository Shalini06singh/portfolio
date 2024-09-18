import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
      <p className="mb-4">
       Software Developer skilled in MERN stack technologies and problem solving using Java programming language
      </p>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
      <ul>
        <li>
          <a
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Shalini06singh"
            className="hover:text-white transition-colors duration-300"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/shalini06/ "
          className="hover:text-white transition-colors duration-300"
        >
         Linkedin
        </a>
        <a
          href="https://github.com/Shalini06singh"
          className="hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="singh0605shalini@gmail.com"
          className="hover:text-white transition-colors duration-300"
        >
          Gmail
        </a>
      </div>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
      <p>Lucknow, India</p>
      <p>Indira Nagar 10001</p>
      <p>Email: info@softwareengineer.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
    </div>
    <p className="text-center text-xs pt-8">© 2024 Made with LOVE by Shalini Singh.</p>
</footer>
  );
}

export default Footer;
