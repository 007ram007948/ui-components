import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeSnippet = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="p-6 bg-black border border-gray-800 rounded-2xl shadow-2xl max-w-[850px]"
      // style={{ minWidth: "100px" }} // Apply min-width here
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-200">Code Snippet</h2>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-lg hover:bg-gray-200 border border-gray-300 transition duration-200">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
      <div className="max-w-full overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
