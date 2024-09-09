import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer bg-white border-gray-200 dark:bg-gray-800 py-16">
                <div className="content container mx-auto text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="location text-white">
                        <h2 className='text-xl font-bold mb-5'>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="around text-white">
                        <h2 className='text-xl font-bold mb-5'>AROUND THE WEB</h2>
                        <div className="icons flex justify-center gap-3">
                            <div className="border border-white rounded-full h-10 w-10 flex justify-center items-center">
                                <i className="fa-brands fa-facebook-f px-1 text-xl"></i>
                            </div>
                            <div className="border border-white rounded-full h-10 w-10 flex justify-center items-center">
                                <i className="fa-brands fa-twitter px-1 text-xl"></i>
                            </div>
                            <div className="border border-white rounded-full h-10 w-10 flex justify-center items-center">
                                <i className="fa-brands fa-linkedin px-1 text-xl"></i>
                            </div>
                            <div className="border border-white rounded-full h-10 w-10 flex justify-center items-center">
                            <i className="fa-solid fa-globe px-1 text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="about text-white">
                        <h2 className='text-xl font-bold mb-5'>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className="btm bg-slate-900">
                    <p className="text-white text-center py-7">Copyright © 2021 Freelancer. All rights reserved.</p>
            </div>
        </>
    )
}
