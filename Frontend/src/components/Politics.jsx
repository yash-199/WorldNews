import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Politics = () => {
    const [Politics, setPolitics] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPolitics = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=politics&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8');
                const jsonData = await response.json();

                // Check for the correct property (articles)
                if (jsonData.articles) {
                    setPolitics(jsonData.articles); // Set articles from response
                    console.log('Politics News', jsonData);
                } else {
                    console.log('No New Data Found');
                }
            } catch (error) {
                console.error('Error', error);
            }
        };
        fetchPolitics();
    }, []);

    return (
        <div className='w-full mt-16 px-4 md:px-8 lg:px-16'>
            <div className='flex items-start md:items-start justify-between'>
                <p className='text-2xl md:text-3xl pt-4 font-semibold text-black'>Political</p>
                <button className='bg-blue-950 text-white px-6 md:px-10 py-2 md:py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-100 transition-all duration-150'>View All</button>
            </div>
            <hr className='my-4 bg-black h-0.5' />
            {
                Politics.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                        {Politics.slice(0, 3).map((newItem, index) => (
                            <div className='relative w-90' key={index}>
                                <img
                                    className='drop-shadow-lg rounded w-full h-60 object-cover'
                                    src={newItem.urlToImage || 'fallback-image-url.jpg'} // Use fallback if no image
                                    alt={newItem.title}
                                />
                                <p className='absolute right-4 transform -translate-y-7 text-sm text-white bg-red-600 px-3 py-1 rounded' style={{ top: "12%" }}>Political</p>
                                <p className='w-full absolute px-4 py-1 transform -translate-y-7 text-sm text-white bg-black bg-opacity-30'>{newItem.country || 'Unknown'},{new Date(newItem.publishedAt).toLocaleDateString()}</p>
                                <p className='text-lg my-5 font-semibold'>{newItem.title}</p>
                                <p className='text-sm text-slate-500'>{newItem.description}</p>
                                <button onClick={() => navigate('/political-news')} className='mt-6 bg-blue-950 text-white px-10 py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-100 transition-all duration-150'>Read More</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading Politics News...</p>
                )
            }
        </div>
    );
};
