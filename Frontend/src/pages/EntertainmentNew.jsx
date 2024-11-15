import { useEffect, useState } from 'react';
import LatestSide from '../assets/LatestSideImg (1).png';

const EntertainmentNew = () => {
    const [enterNews, setEnterNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=entertainment&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8');
                const jsonData = await response.json();

                if (jsonData.articles) {
                    setEnterNews(jsonData.articles);
                    console.log("Entertainment New:", jsonData.articles);
                } else {
                    console.error('No articles data found');
                }
            } catch (error) {
                console.error('Error fetching entertainment news:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='w-full mt-16 px-4 md:px-6 lg:px-10 xl:px-16'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold text-black mb-8'>Entertainment News</h1>
            <div className='flex flex-wrap justify-center gap-6'>
                {enterNews.map((newsItem, index) => (
                    <div
                        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4' // Responsive width classes for different breakpoints
                        key={index}
                    >
                        <div className='relative mb-6'>
                            <img
                                className='drop-shadow-lg rounded w-full object-cover h-52 sm:h-60 md:h-64 lg:h-72' // Adaptive height for different screen sizes
                                src={newsItem.urlToImage || LatestSide} // Fallback image
                                alt={newsItem.title || 'News image'}
                            />
                            <p className='absolute right-4 transform -translate-y-1/2 text-white text-xs md:text-sm bg-blue-700 px-2 py-1 rounded' style={{ top: "12%" }}>Entertainment</p>
                            <p className='absolute px-3 py-1 transform -translate-y-7 text-xs md:text-sm text-white bg-black bg-opacity-30 w-full'>
                                {newsItem.source.name || 'Unknown'}, {new Date(newsItem.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                        <h1 className='font-semibold text-lg md:text-xl text-black mb-2 truncate'>{newsItem.title}</h1>
                        <p className='text-sm md:text-base text-slate-500 leading-5 md:leading-6'>
                            {newsItem.description ? `${newsItem.description.substring(0, 100)}...` : 'No description available.'}
                        </p>
                        <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                            <button className='mt-4 md:mt-6 bg-blue-950 text-white px-8 py-2 md:px-10 md:py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-105 transition-all duration-150'>Read More</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EntertainmentNew;
