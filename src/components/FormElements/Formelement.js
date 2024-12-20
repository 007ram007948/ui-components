import React from "react";

const Formelement = () => {
  return (
    <section class="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Default Input
              </label>
              <input
                type="text"
                placeholder="Default Input"
                class="w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
              />
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Active Input
              </label>
              <input
                type="text"
                placeholder="Active Input"
                class="w-full rounded-md border border-primary bg-transparent px-5 py-[10px] text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2"
              />
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Disabled label
              </label>
              <input
                type="text"
                placeholder="Disabled Input"
                disabled
                class="w-full rounded-md border border-stroke px-5 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
              />
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Default textarea
              </label>
              <textarea
                rows="5"
                placeholder="Default textarea"
                class="w-full rounded-md border border-stroke bg-transparent p-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3"
              ></textarea>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Active textarea
              </label>
              <textarea
                rows="5"
                placeholder="Active textarea"
                class="w-full rounded-md border border-primary bg-transparent p-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              ></textarea>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Disabled textarea
              </label>
              <textarea
                rows="5"
                placeholder="Disabled textarea"
                disabled
                class="w-full rounded-md border border-stroke p-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3"
              ></textarea>
            </div>
          </div>
          <div class="w-full px-4 lg:w-5/12">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Default file input
              </label>
              <input
                type="file"
                class="w-full cursor-pointer rounded-md border border-stroke text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-gray-2 file:px-5 file:py-3 file:text-body-color file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:file:border-dark-3 dark:file:bg-dark-2 dark:file:text-dark-6"
              />
            </div>
          </div>
          <div class="w-full px-4 lg:w-5/12">
            <div class="mb-12">
              <label
                for=""
                class="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Default Select
              </label>
              <div class="relative z-20">
                <select class="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3">
                  <option value="" class="dark:bg-dark-2">
                    Option
                  </option>
                  <option value="" class="dark:bg-dark-2">
                    Option
                  </option>
                  <option value="" class="dark:bg-dark-2">
                    Option
                  </option>
                </select>
                <span class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formelement;
