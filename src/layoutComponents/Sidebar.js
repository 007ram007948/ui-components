// components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ searchTerm, setSearchTerm, links }) => {
  return (
    <aside className="w-64 h-screen text-sm font-[500] bg-[#000000] text-white flex flex-col p-4 fixed overflow-y-auto scrollbar-thin-visible">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 bg-[#1a1a1a] rounded text-white"
      />
      {links
        .filter((link) =>
          link.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((link, index) => (
          <Link key={index} to={link.to} className="mb-2 p-2 hover:underline">
            {link.name}
          </Link>
        ))}
    </aside>
  );
};

export default Sidebar;

// // components/Sidebar.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = ({ searchTerm, setSearchTerm, links }) => {
//   return (
//     <aside className="w-64 h-screen text-sm font-medium bg-black text-white flex flex-col fixed p-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full p-2 bg-[#1a1a1a] rounded text-white"
//         />
//       </div>
//       <div className="overflow-y-auto scrollbar-thin-visible">
//         {links
//           .filter((link) =>
//             link.name.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//           .map((link, index) => (
//             <Link
//               key={index}
//               to={link.to}
//               className="block mb-2 p-2 hover:underline"
//             >
//               {link.name}
//             </Link>
//           ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
