// components/NavigationButtons.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationButtons = ({ links }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = links.findIndex((link) => link.to === location.pathname);
  const previous = currentIndex > 0 ? links[currentIndex - 1] : null;
  const next = currentIndex < links.length - 1 ? links[currentIndex + 1] : null;

  return (
    <div className="flex justify-between mt-8">
      {previous && (
        <button
          onClick={() => navigate(previous.to)}
          className="px-4 py-2 bg-[#1a1a1a] rounded-lg hover:bg-[#333333] transition duration-150"
        >
          ← {previous.name}
        </button>
      )}
      {next && (
        <button
          onClick={() => navigate(next.to)}
          className="px-4 py-2 bg-[#1a1a1a] rounded-lg hover:bg-[#333333] transition duration-150"
        >
          {next.name} →
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
