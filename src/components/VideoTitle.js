import React from 'react'
import { IoPlay } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" w-full aspect-video pt-[18%] md:pt-[12%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
            <div className='flex'> 
                <button className='bg-white px-3  md:px-12 my-2 flex text-black items-center gap-1 text-md md:text-xl py-1  md:py-4 hover:bg-opacity-80  rounded-lg'> <IoPlay />
                    <p> Play</p>
                </button>
                <button className='bg-gray-500 my-2 hidden md:inline-block mx-2 px-12 text-white text-xl p-4 bg-opacity-50 rounded-lg'> More Info</button>

            </div>
        </div>
    )
}

export default VideoTitle
