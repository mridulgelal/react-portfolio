import book from '../assets/book.png';

const Education = () => {
  return (
    <div className=" text-black shadow-lg rounded-lg h-full py-10 ">
      <h2 className="text-center p-5 text-2xl mb-5">EDUCATION</h2>
      <div className="flex flex-wrap justify-between px-20 ">
        <ol class="relative border-l border-gray-200  flex flex-col ">
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Nepal College Of Information Technology
              <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Current
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2018 November
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Bachelors in Software Engneering
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 ">
              Trinity H.S School
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2016-2018
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              +2 science
            </p>
          </li>
          <li class="ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900">
              Modern Boarding Higher Secondary School
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2016
            </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              SLC
            </p>
          </li>
        </ol>
        <img
          src={book}
          height="40px"
          width="400px"
          className=" hidden lg:flex -mt-10   "
        />
      </div>
    </div>
  );
};

export default Education;
