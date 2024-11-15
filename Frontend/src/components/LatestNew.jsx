import React, { useState, useEffect } from 'react';
import LatestSide from '../assets/LatestSideImg (1).png';
import { useNavigate } from 'react-router-dom';

const LatestNew = () => {
    const [newsData, setNewsData] = useState([]); // Initialize as an empty array
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://newsapi.org/v2/everything?q=news&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8&language=en'
                );
                const jsonData = await response.json();
                setNewsData(jsonData.articles || []); // Set to an empty array if `articles` is null
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-14 px-4 lg:px-0'>
            <h1 className='text-3xl md:text-4xl font-semibold text-black'>Latest News</h1>
            <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-20 mt-10'>
                {newsData.length > 2 && newsData.slice(2, 3).map((newsItem, index) => (
                    <div className='w-full lg:w-1/2' key={index}>
                        <div className='relative'>
                            <img
                                className='drop-shadow-lg rounded w-full object-cover h-60 md:h-80'
                                src={newsItem.urlToImage || LatestSide}
                                alt="Main topic"
                            />
                            <p className='absolute right-4 transform -translate-y-1/2 text-white text-xs md:text-sm bg-red-700 px-2 md:px-3 py-1 rounded' style={{ top: "12%" }}>Hot Topic</p>
                            <p className='absolute px-2 md:px-4 py-1 transform -translate-y-7 text-xs md:text-sm text-white bg-black bg-opacity-30 w-full'>
                                {newsItem.source.name || 'Unknown'}, {new Date(newsItem.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                        <h1 className='font-semibold text-xl md:text-2xl text-black my-2 md:my-3'>{newsItem.title}</h1>
                        <p className='text-sm md:text-base text-slate-500 leading-5 md:leading-6'>{newsItem.description}</p>
                        <button onClick={() => navigate('/latest')} className='mt-4 md:mt-6 bg-blue-950 text-white px-6 md:px-10 py-2 md:py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-105 transition-all duration-150'>Read More</button>
                    </div>
                ))}
                <div className='w-full lg:w-1/2 flex flex-col'>
                    {newsData.length > 2 && newsData.slice(4, 6).map((newsItem, index) => (
                        <div key={index} className='flex flex-col md:flex-row items-start gap-4 mb-4 md:mb-6'>
                            <div className='w-full md:w-1/3'>
                                <img
                                    className='w-full h-32 md:h-40 object-cover drop-shadow-lg rounded'
                                    src={newsItem.urlToImage || LatestSide}
                                    alt={`News item ${index + 2}`}
                                />
                            </div>
                            <div className='w-full md:w-2/3'>
                                <p className='text-xs md:text-sm font-light'>
                                    {newsItem.source.name || 'Unknown'}, {new Date(newsItem.publishedAt).toLocaleDateString()}
                                </p>
                                <p className='text-base md:text-lg font-semibold'>{newsItem.title}</p>
                                <p className='text-xs md:text-sm text-slate-500'>{newsItem.description}</p>
                                <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                                    <button className='mt-4 bg-blue-950 text-white px-6 md:px-10 py-2 md:py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-105 transition-all duration-150'>Read More</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestNew;
