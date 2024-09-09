import React from 'react'


export default function About() {
    return (
        <>
            <div className='bg-emerald-500 min-h-screen flex justify-center items-center'>
                <div className="about">
                    <div>
                        <h2 className='mt-4 uppercase text-center text-white font-bold text-4xl'>About Component</h2>
                        <div className='flex justify-center items-center'>
                            <div className='w-20 h-1 bg-white'></div>
                            <i className="fa-solid fa-star mx-3 my-4 text-white"></i>
                            <div className='w-20 h-1 bg-white'></div>
                        </div>
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 w-3/4 mx-auto text-white">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
