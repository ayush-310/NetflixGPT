import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" aspect-video pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className='bg-white px-12 text-black text-xl p-4 hover:bg-opacity-80  rounded-lg'> ▶ Play</button>
                <button className='bg-gray-500 mx-2 px-12 text-white text-xl p-4 bg-opacity-50 rounded-lg'> More Info</button>
        
            </div>
        </div>
    )
}

export default VideoTitle
