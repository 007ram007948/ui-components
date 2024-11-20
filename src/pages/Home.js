// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex flex-wrap justify-center">
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Heroes"}
//         >
//           Heroes
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Abouts"}
//         >
//           Abouts
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Features"}
//         >
//           Features
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Blogs"}
//         >
//           Blogs
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Portfolios"}
//         >
//           Portfolios
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Teams"}
//         >
//           Teams
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Testimonials"}
//         >
//           Testimonials
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Faqs"}
//         >
//           Faqs
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Pricings"}
//         >
//           Pricings
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Contacts"}
//         >
//           Contacts
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Footers"}
//         >
//           Footers
//         </Link>
//         <Link
//           className="m-2 px-10 py-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//           to={"/Buttons"}
//         >
//           Buttons
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to my Component Library
        </h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          A sleek, customizable, and easy-to-use library of components for your
          React applications.
        </p>
        <Link
          to={"/alerts"}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
        >
          Components
        </Link>
      </section>

      {/* Features Section */}
      {/* <section className="py-16 px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
            <p>
              Simply import components and start using them in your projects.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Fully Customizable</h3>
            <p>
              Tailor components to your needs with extensive styling options.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
            <p>
              All components are fully responsive, making your UI look great on
              all devices.
            </p>
          </div>
        </div>
      </section> */}
      {/* 
      <section id="demo" className="bg-gray-900 text-white py-20">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Component Demo
        </h2>
        <div className="flex justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-xs w-full">
            <h3 className="text-2xl font-semibold text-center mb-4">Button</h3>
            <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Click Me
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-xs w-full">
            <h3 className="text-2xl font-semibold text-center mb-4">Card</h3>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Card Title</h4>
              <p className="text-sm">
                This is a simple example of a card component.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <p>&copy; 2024 Shritech Component Library. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="https://github.com/your-repo"
              className="text-blue-400 hover:text-blue-500"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="/documentation"
              className="text-blue-400 hover:text-blue-500"
            >
              Documentation
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
