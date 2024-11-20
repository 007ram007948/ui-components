import React, { useState } from "react";

const Dropdown = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
  };

  const toggleDropdown4 = () => {
    setDropdown4Open(!dropdown4Open);
  };

  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] h-screen">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
            <div className="py-8 text-center">
              <div
                onClick={toggleDropdown1}
                className="relative mb-8 inline-block text-left"
              >
                <button className="flex items-center rounded-[5px] bg-primary px-5 py-[13px] text-base font-medium text-white">
                  Dropdown Button
                  <span className="pl-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`absolute left-0 z-40 mt-2 w-full rounded-md bg-white py-[10px] shadow-1 transition-all ${
                    dropdown1Open
                      ? "top-full opacity-100 visible"
                      : "top-[110%] invisible opacity-0"
                  } dark:bg-dark-2 dark:shadow-box-dark`}
                >
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Dashboard
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Settings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Earnings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
            <div className="py-8 text-center">
              <div
                onClick={toggleDropdown2}
                className="relative mb-8 inline-block text-left"
              >
                <button className="flex items-center rounded-[5px] bg-primary px-5 py-[13px] text-base font-medium text-white">
                  Dropdown Button
                  <span className="pl-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`absolute left-0 z-40 mt-2 w-full rounded-md bg-primary py-[10px] shadow-1 transition-all ${
                    dropdown2Open
                      ? "top-full opacity-100 visible"
                      : "top-[110%] invisible opacity-0"
                  } dark:shadow-box-dark`}
                >
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Dashboard
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Earnings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
            <div className="py-8 text-center">
              <div
                onClick={toggleDropdown3}
                className="relative mb-8 inline-block text-left"
              >
                <button className="flex items-center rounded-[5px] bg-dark px-5 py-[13px] text-base font-medium text-white dark:bg-dark-2">
                  Dropdown Button
                  <span className="pl-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`absolute left-0 z-40 mt-2 w-full rounded-md bg-dark py-[10px] shadow-1 transition-all ${
                    dropdown3Open
                      ? "top-full opacity-100 visible"
                      : "top-[110%] invisible opacity-0"
                  } dark:bg-dark-2 dark:shadow-box-dark`}
                >
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Dashboard
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Earnings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-white/60 hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
            <div className="py-8 text-center">
              <div
                onClick={toggleDropdown4}
                className="relative mb-8 inline-block text-left"
              >
                <button className="flex items-center rounded-[5px] bg-primary px-5 py-[13px] text-base font-medium text-white">
                  Dropdown Button
                  <span className="pl-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`absolute left-0 z-40 mt-2 w-full rounded-md bg-white py-[10px] shadow-1 transition-all ${
                    dropdown4Open
                      ? "top-full opacity-100 visible"
                      : "top-[110%] invisible opacity-0"
                  } dark:bg-dark-2 dark:shadow-box-dark`}
                >
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Dashboard
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Settings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Earnings
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="block px-5 py-2 text-base text-body-color hover:bg-[#F5F7FD] hover:text-primary dark:text-dark-6 dark:hover:bg-primary/5"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
