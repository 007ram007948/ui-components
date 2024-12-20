const Blogdetails = () => {
  return (
    <div>
      <main>
        <article>
          <header class="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p class="text-gray-500">Published April 4, 2022</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why quit now?
            </h1>
            <p class="mt-6 text-lg text-gray-700">
              You've come way farther than you expected
            </p>
            <div class="mt-6 flex flex-wrap justify-center gap-2">
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Marketing
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Branding
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Digital
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Identity
              </button>
            </div>
            <img
              class="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </header>

          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">
              First Steps to Life Betterment
            </h2>
            <blockquote class="max-w-lg border-l-4 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maiores tempora quod ducimus dolore!
              <span class="whitespace-nowrap text-sm">— Daniel Lehmer</span>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim maxime sit laudantium! Dolore atque, maxime iusto ut quas
              distinctio reiciendis animi voluptatibus soluta molestias,
              mollitia officiis laboriosam illum earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              similique reiciendis et recusandae provident repellendus rem
              doloremque eaque error assumenda?
            </p>
          </div>
        </article>
      </main>

      <div class="w-fit mx-auto mt-10 flex space-x-2">
        <div class="h-0.5 w-2 bg-gray-600"></div>
        <div class="h-0.5 w-32 bg-gray-600"></div>
        <div class="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <aside
        aria-label="Recent Posts"
        class="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              necessitatibus molestias explicabo.
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Pines and the Mountains
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Coding Mania
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Architectural Warfare
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Blues in Architechture
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blogdetails;

export const BlogdetailsCode = `import React from "react";

const Blogdetails = () => {
  return (
    <div>
      <main>
        <article>
          <header class="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p class="text-gray-500">Published April 4, 2022</p>
            <h1 class="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why quit now?
            </h1>
            <p class="mt-6 text-lg text-gray-700">
              You've come way farther than you expected
            </p>
            <div class="mt-6 flex flex-wrap justify-center gap-2">
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Marketing
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Branding
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Digital
              </button>
              <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Identity
              </button>
            </div>
            <img
              class="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </header>

          <div class="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 class="text-2xl font-semibold">
              First Steps to Life Betterment
            </h2>
            <blockquote class="max-w-lg border-l-4 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              maiores tempora quod ducimus dolore!
              <span class="whitespace-nowrap text-sm">— Daniel Lehmer</span>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim maxime sit laudantium! Dolore atque, maxime iusto ut quas
              distinctio reiciendis animi voluptatibus soluta molestias,
              mollitia officiis laboriosam illum earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              similique reiciendis et recusandae provident repellendus rem
              doloremque eaque error assumenda?
            </p>
          </div>
        </article>
      </main>

      <div class="w-fit mx-auto mt-10 flex space-x-2">
        <div class="h-0.5 w-2 bg-gray-600"></div>
        <div class="h-0.5 w-32 bg-gray-600"></div>
        <div class="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <aside
        aria-label="Recent Posts"
        class="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              necessitatibus molestias explicabo.
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Pines and the Mountains
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Coding Mania
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Architectural Warfare
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>

            <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  loading="lazy"
                  alt=""
                  class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">April 2, 2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Blues in Architechture
                  </a>
                </h2>

                <p class="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blogdetails;`;

{
  /* <header class="bg-white">
        <div class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
          <a
            href="#"
            class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
          >
            <span class="mr-2 text-4xl text-cyan-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
                />
              </svg>
            </span>
            mellow
          </a>
          <input type="checkbox" class="peer hidden" id="navbar-open" />
          <label
            class="absolute top-5 right-7 cursor-pointer md:hidden"
            for="navbar-open"
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li class="font-bold md:mr-12">
                <a href="#">Blog</a>
              </li>
              <li class="md:mr-12">
                <a href="#">Features</a>
              </li>
              <li class="md:mr-12">
                <a href="#">Support</a>
              </li>
              <li class="md:mr-12">
                <button class="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header> */
}
