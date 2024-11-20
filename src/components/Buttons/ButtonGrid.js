const ButtonGrid = () => {
  return (
    <div className="my-10 sm:mx-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <a
        href="#"
        className="shadow-pink-600/30 inline-flex h-12 items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg"
      >
        Contact Us
      </a>

      <button className="shrink-0 rounded-full bg-red-600 px-8 py-3 font-medium text-white focus:bg-red-700 focus:outline-none hover:bg-red-700">
        Get Now
      </button>

      <button className="group flex w-full items-center justify-center rounded-md bg-cyan-400 px-5 py-3 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200">
        <span className="text-sm font-medium"> Sign Up </span>
        <svg
          className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>

      <button className="w-56 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">
        Continue
      </button>

      <button className="bg-gradient-to-r from-emerald-300 to-blue-500 px-6 py-3 text-white outline-none ring-blue-300 transition-all focus:ring hover:font-bold hover:opacity-90">
        Continue
      </button>

      <button className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
        <a
          href="#"
          className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"
        >
          {" "}
          Shop now{" "}
        </a>
        <svg
          className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      <a
        href="#"
        className="bg-slate-900 flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </a>

      <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
        <span> Learn more </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <button className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </button>
    </div>
  );
};

export default ButtonGrid;
