import React from 'react'
import { IoPlay } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" aspect-video pt-[12%] px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className='flex'> 
                <button className='bg-white px-12 flex text-black items-center gap-1 text-xl p-4 hover:bg-opacity-80  rounded-lg'> <IoPlay />
                    <p> Play</p>
                </button>
                <button className='bg-gray-500 mx-2 px-12 text-white text-xl p-4 bg-opacity-50 rounded-lg'> More Info</button>

            </div>
        </div>
    )
}

export default VideoTitle
