import React, { useEffect, useState } from 'react'

const HealthNew = () => {
    const [healthNews, setHealthNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8')
                const jsonData = await response.json()

                if (jsonData.articles) {
                    setHealthNews(jsonData.articles);
                    console.log(jsonData.articles);
                } else {
                    console.log('No New Found');
                }
            } catch (error) {
                console.error("Error in fetching Data", error)
            }
        };
        fetchNews();
    }, [])
    return (
        <div className='w-full mt-16 px-4 md:px-6 lg:px-10 xl:px-16'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold text-black mb-8'>Health News</h1>
            <div className='flex flex-wrap justify-center gap-6'>
                {healthNews.map((newsItem, index) => (
                    <div
                        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4' // Responsive width classes
                        key={index}
                    >
                        <div className='relative mb-6'>
                            <img
                                className='drop-shadow-lg rounded w-full object-cover h-60' // Consistent height
                                src={newsItem.urlToImage} // Fallback image
                                alt="Main topic"
                            />
                            <p className='absolute right-4 transform -translate-y-1/2 text-white text-sm bg-blue-700 px-3 py-1 rounded' style={{ top: "12%" }}>Health</p>
                            <p className='absolute px-4 py-1 transform -translate-y-7 text-sm text-white bg-black bg-opacity-30 w-full'>
                                {newsItem.source.name || 'Unknown'}, {new Date(newsItem.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                        <h1 className='font-semibold text-xl text-black my-2'>{newsItem.title}</h1>
                        <p className='text-slate-500 leading-6'>
                            {newsItem.description || 'No description available.'}
                        </p>
                        <a href={newsItem.url}>
                            <button className='mt-6 bg-blue-950 text-white px-10 py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-100 transition-all duration-150'>Read More</button>
                            {/* Remove truncation to show full description */}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HealthNew