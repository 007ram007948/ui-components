import React from "react";

const Faq2 = () => {
  return (
    <div className="relative mx-auto w-full px-5 py-16 text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
      <h2 className="mb-5 text-4xl text-center font-serif sm:text-5xl">
        Have Questions? Checkout these FAQs
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600">
        We have written down answers to some of the frequently asked questions.
        But, if you still have any queries, feel free to ping us on chat.
      </p>
      <ul className="divide-y divide-gray-200">
        <li className="text-left">
          <label htmlFor="accordion-1" className="flex flex-col">
            <input className="peer hidden" type="checkbox" id="accordion-1" />
            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
              <h3 className="text-sm lg:text-base">
                Is there a free trial with Appsy?
              </h3>
            </div>
            <div className="peer-checked:hidden pr-2">
              <div className="pb-5">
                <p className="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label htmlFor="accordion-2" className="flex flex-col">
            <input
              className="peer hidden"
              type="checkbox"
              id="accordion-2"
              checked
            />
            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
              <h3 className="text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </h3>
            </div>
            <div className="peer-checked:hidden pr-2">
              <div className="pb-5">
                <p className="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label htmlFor="accordion-3" className="flex flex-col">
            <input
              className="peer hidden"
              type="checkbox"
              id="accordion-3"
              checked
            />
            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
              <h3 className="text-sm lg:text-base">
                Is there a free trial with Appsy?
              </h3>
            </div>
            <div className="peer-checked:hidden pr-2">
              <div className="pb-5">
                <p className="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
        <li className="text-left">
          <label htmlFor="accordion-4" className="flex flex-col">
            <input
              className="peer hidden"
              type="checkbox"
              id="accordion-4"
              checked
            />
            <div className="before:absolute before:-left-6 before:block before:text-xl before:text-blue-400 before:content-['–'] peer-checked:before:content-['+'] relative ml-4 cursor-pointer select-none items-center py-4 pr-2">
              <h3 className="text-sm lg:text-base">
                Is there a Lorem ipsum dolor sit. with Appsy?
              </h3>
            </div>
            <div className="peer-checked:hidden pr-2">
              <div className="pb-5">
                <p className="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
      </ul>
      <div className="mt-20 flex justify-center">
        <a
          className="inline-flex cursor-pointer rounded-full bg-blue-400 px-5 py-4 text-white"
          href="#"
        >
          Still have a question? Ping us on chat support
        </a>
      </div>
    </div>
  );
};

export default Faq2;
