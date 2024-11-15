import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Entertainment = () => {
    const [entertainment, setEntertainment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEntertainmentNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=entertainment&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8');
                const jsonData = await response.json();

                if (jsonData.articles) {
                    setEntertainment(jsonData.articles);
                    console.log("Entertainment News:", jsonData.articles);
                } else {
                    console.error('No articles data found');
                }
            } catch (error) {
                console.error('Error fetching entertainment news:', error);
            }
        };

        fetchEntertainmentNews();
    }, []);

    return (
        <div className='w-full mt-16 px-4 md:px-8 lg:px-16'>
            <div className='flex items-center md:items-start justify-between'>
                <p className='text-2xl md:text-3xl font-semibold text-black mb-4 md:mb-0'>Entertainment</p>
                <button className='bg-blue-950 text-white px-6 md:px-10 py-2 md:py-3 rounded hover:text-blue-950 hover:bg-white border border-black transition-transform duration-150'>View All</button>
            </div>
            <hr className='my-4 bg-black h-0.5' />

            {entertainment.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                    {entertainment.slice(0, 3).map((newItem, index) => (
                        <div className='relative' key={index}>
                            <img className='drop-shadow-lg rounded w-full h-48 sm:h-60 object-cover' src={newItem.urlToImage || 'default-image-url.jpg'} alt={newItem.title || 'News image'} />
                            <p className='absolute right-4 transform -translate-y-7 text-xs sm:text-sm text-white bg-blue-700 px-2 sm:px-3 py-1 rounded' style={{ top: "12%" }}>Entertainment</p>
                            <p className='w-full absolute px-2 sm:px-4 py-1 transform -translate-y-7 text-xs sm:text-sm text-white bg-black bg-opacity-30'>
                                {newItem.source.name || 'Unknown'}, {new Date(newItem.publishedAt).toLocaleDateString()}
                            </p>
                            <p className='text-base sm:text-lg my-2 sm:my-5 font-semibold'>{newItem.title}</p>
                            <p className='text-xs sm:text-sm text-slate-500'>{newItem.description}</p>
                            <button onClick={() => navigate('/entertainment-new')} className='mt-4 sm:mt-6 bg-blue-950 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:text-blue-950 hover:bg-white border border-black transition-transform duration-150'>Read More</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading Entertainment...</p>
            )}
        </div>
    );
};

export default Entertainment;
