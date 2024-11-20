import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";

const ComponentShowcase = ({ pageTitle, components }) => {
  const [showCode, setShowCode] = useState({});

  const handleToggle = (index) => {
    setShowCode((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-8 bg-[#000000] min-h-screen text-gray-100">
      <h1 className="text-4xl font-semibold mb-12 text-white">{pageTitle}</h1>
      {components.map(({ component, codeString }, index) => (
        <div
          key={index}
          className="mb-8 bg-[#000000] border border-[#333333] rounded-2xl shadow-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-200">
              Component {index + 1}
            </h2>
            <button
              onClick={() => handleToggle(index)}
              className="px-5 py-2 text-sm font-medium text-gray-800 bg-white rounded-lg hover:bg-gray-200 border border-gray-300 transition duration-200"
            >
              {showCode[index] ? "View Component" : "View Code"}
            </button>
          </div>
          <div className="transition-all duration-200 ease-in-out">
            {showCode[index] ? (
              <CodeSnippet code={codeString} language="javascript" />
            ) : (
              <div
                className="p-6 border border-gray-700 rounded-lg bg-[#000000] scrollbar-thin-visible"
                style={{
                  height: "500px",
                  overflow: "auto",
                }}
              >
                {component}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentShowcase;
