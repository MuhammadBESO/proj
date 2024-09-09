import React, { useState } from 'react';
import port1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showLayer, setShowLayer] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowLayer(true);
    };

    const handleLayerClose = () => {
        setSelectedImage(null);
        setShowLayer(false);
    };

    const handleClickOutsideLayer = () => {
        if (showLayer) {
            setShowLayer(false)
        }
    };

    return (
        <div onClick={handleClickOutsideLayer}>
            <div className='portfolio flex justify-center items-center text-gray-800 pt-40 mb-10'>
                <div className="container">
                    <div>
                        <h2 className='mt-4 uppercase text-center font-bold text-4xl'>Portofolio Component</h2>
                        <div className='flex justify-center items-center'>
                            <div className='w-20 h-1 bg-gray-800'></div>
                            <i className="fa-solid fa-star mx-3 my-4"></i>
                            <div className='w-20 h-1 bg-gray-800'></div>
                        </div>

                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11'>
                            <div className="box relative rounded-lg overflow-hidden">
                                <img src={port1} alt="Home" className='w-full' />
                                <div className="layer absolute top-0 w-full h-full flex justify-center items-center bg-teal-500 opacity-0 hover:opacity-100 duration-700 cursor-pointer" onClick={() => handleImageClick(port1)}>
                                    <i className="fa-solid fa-circle-plus fa-5x"></i>
                                </div>
                            </div>
                            <div className="box relative rounded-lg overflow-hidden">
                                <img src={port2} alt="Cake" className='w-full' />
                                <div className="layer absolute top-0 w-full h-full flex justify-center items-center bg-teal-500 opacity-0 hover:opacity-100 duration-700 cursor-pointer" onClick={() => handleImageClick(port2)}>
                                    <i className="fa-solid fa-circle-plus fa-5x"></i>
                                </div>
                            </div>
                            <div className="box relative rounded-lg overflow-hidden">
                                <img src={port3} alt="Tent" className='w-full' />
                                <div className="layer absolute top-0 w-full h-full flex justify-center items-center bg-teal-500 opacity-0 hover:opacity-100 duration-700 cursor-pointer" onClick={() => handleImageClick(port3)}>
                                    <i className="fa-solid fa-circle-plus fa-5x"></i>
                                </div>
                            </div>
                            <div className="box relative rounded-lg overflow-hidden">
                                <img src={port1} alt="Home" className='w-full' />
                                <div className="layer absolute top-0 w-full h-full flex justify-center items-center bg-teal-500 opacity-0 hover:opacity-100 duration-700 cursor-pointer" onClick={() => handleImageClick(port1)}>
                                    <i className="fa-solid fa-circle-plus fa-5x"></i>
                                </div>
                            </div>
                            <div className="box relative rounded-lg overflow-hidden">
                                <img src={port2} alt="Cake" className='w-full' />
                                <div className="layer absolute top-0 w-full h-full flex justify-center items-center bg-teal-500 opacity-0 hover:opacity-100 duration-700 cursor-pointer" onClick={() => handleImageClick(port2)}>
                                    <i className="fa-solid fa-circle-plus fa-5x"></i>
                                </div>
                            </div>
                            <div className="box relative rounded-lg overflow-hidden">
                                <img src={port3} alt="Tent" className='w-full' />
                                <div className="layer absolute top-0 w-full h-full flex justify-center items-center bg-teal-500 opacity-0 hover:opacity-100 duration-700 cursor-pointer" onClick={() => handleImageClick(port3)}>
                                    <i className="fa-solid fa-circle-plus fa-5x"></i>
                                </div>
                            </div>
                        </div>
                        
                        {showLayer && (
                            <div className="layer2 fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
                                <div className="modal-content rounded-lg">
                                    <img src={selectedImage} alt="Selected" className="w-80 md:w-96 rounded-lg" />
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

