import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
// import openai from '../utils/openai';
import genai from '../utils/geminiApi';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
        console.log("Search Text:", searchText.current.value);

        const gptQuery = "Act as a movie recommendation system. Based on the user's input, suggest movies that match their preferences. The user will provide a search query, and you will return a list of recommended movies." +
            searchText.current.value +
            ". only give me names of 5 movies ,  comma separated  like the eg result given ahead. Example Result : Brothers , Avengers , Cars3, F1, Barbie"


        // Make an API call to GPT API anf get movie results
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'developer', content: gptQuery }],
        //     // model: 'gpt-3.5-turbo',
        //     model: "gpt-4o-mini",
        // });


        const gptResults = await genai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: gptQuery,
        });
        console.log(gptResults);


        // console.log(gptResults.choices);
    }
    return (
        <div className='pt-[10%] flex justify-center'>
            <form
                className='w-1/2 bg-black grid grid-cols-12 '
                onSubmit={(e) => e.preventDefault()}>
                <input type="text"
                    ref={searchText}
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langKey]?.gptSearchPlaceholder}
                />
                <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey]?.search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar
