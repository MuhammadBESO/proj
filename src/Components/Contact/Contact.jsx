import React from "react";

export default function Contact() {
    return (
        <div className="min-h-screen pt-36">
        <div>
            <div>
            <h2 className="mt-4 uppercase text-center font-bold text-4xl">
                contact Component
            </h2>
            <div className="flex justify-center items-center">
                <div className="w-20 h-1 bg-black"></div>
                <i className="fa-solid fa-star mx-3 my-4"></i>
                <div className="w-20 h-1 bg-black"></div>
            </div>

            <form className="max-w-3xl mx-auto px-5">
                <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Name
                </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                <input
                    type="number"
                    name="floating_age"
                    id="floating_age"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_age"
                    className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Age
                </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email
                </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    password
                </label>
                </div>
                <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Submit
                </button>
            </form>
            </div>
        </div>
        </div>
    );
}
