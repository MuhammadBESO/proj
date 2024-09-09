import React, { Fragment } from 'react'
import avatar from '../../assets/avataaars.svg'

export default function Home() {
    return (
        <Fragment>

            <div className='bg-emerald-500 min-h-screen flex justify-center items-center'>
                <div className="home">
                    <div className="content">
                        <div className="img flex justify-center items-center">
                            <img className='w-60' src={avatar} alt="Avatar" />
                        </div>
                        <h2 className='mt-4 uppercase text-center text-white font-bold text-4xl'>Start farmework</h2>
                        <div className='flex justify-center items-center'>
                            <div className='w-20 h-1 bg-white'></div>
                            <i className="fa-solid fa-star mx-3 my-4 text-white"></i>
                            <div className='w-20 h-1 bg-white'></div>
                        </div>
                        <p className='text-white text-center'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
