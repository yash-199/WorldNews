import React, { useEffect, useState } from 'react'

const PoliticalNew = () => {
    const [politicalNews, setPoliticalNew] = useState([]);

    useEffect(() => {
        const fetchPoliticalNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=politics&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8');
                const jsonData = await response.json();
                setPoliticalNew(jsonData.articles || [])
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchPoliticalNews();
    }, [])
    return (
        <div className='w-full mt-16 px-4 md:px-6 lg:px-10 xl:px-16'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold text-black mb-8'>Political News</h1>
            <div className='flex flex-wrap justify-center gap-6'>
                {politicalNews.map((newItem, index) => (
                    <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
                        <div className='relative mb-6'>
                            <img className='drop-shadow-lg rounded w-full object-cover h-60' src={newItem.urlToImage} alt="Main Topic" />
                            <p className='absolute right-4 transform -translate-y-1/2 text-white text-sm bg-red-700 px-3 py-1 rounded' style={{ top: "12%" }}>Political</p>
                            <p className='absolute px-4 py-1 transform -translate-y-7 text-sm text-white bg-black bg-opacity-30 w-full'>
                                {newItem.source.name || 'Unknown'}, {new Date(newItem.publishedAt).toLocaleDateString()}
                            </p>
                            <p className='text-lg my-5 font-semibold'>{newItem.title}</p>
                            <p className='text-sm text-slate-500'>{newItem.description}</p>
                            <a href={newItem.url}>
                                <button className='mt-6 bg-blue-950 text-white px-10 py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-100 transition-all duration-150'>Read More</button>
                                {/* Remove truncation to show full description */}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PoliticalNew