import { useEffect, useState } from 'react';
import HotTopic from '../assets/HotTopic.png';

const HotNew = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://newsapi.org/v2/everything?q=hotnews&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8'
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                console.log("Fetched DATA", jsonData);
                setData(jsonData.articles ? jsonData.articles[0] : null); // Assuming 'articles' contains the news data

            } catch (error) {
                console.error('Error fetching Data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        data ? (
            <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between p-4 md:p-8'>
                <div className='w-full md:w-full'>
                    <img className='drop-shadow-lg rounded w-full object-cover h-60 md:h-80 md:w-full' src={data.urlToImage || HotTopic} alt="Hot Topic" />
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <p className='w-2 h-2 bg-red-600 rounded-full'></p>
                        <p className='text-red-600'>Hot Topic</p>
                    </div>
                    <p className='text-2xl md:text-4xl font-semibold mt-2 text-justify'>{data.title}</p>
                    <div className='flex flex-col sm:flex-row items-start gap-2 md:gap-4 mb-4 md:mb-5'>
                        {data.source.name && <p>Source: {data.source.name}</p>}
                        <p>{new Date(data.publishedAt).toLocaleDateString()}</p>
                    </div>
                    <p className='mb-4 md:mb-5 text-justify'>{data.description || data.content || 'Full description not available'}</p>
                    <button className='bg-blue-950 text-white px-6 py-2 md:px-10 md:py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-105 transition-all duration-150'>
                        <a href={data.url} target='_blank' rel='noopener noreferrer'>Read More</a>
                    </button>
                </div>
            </div>

        ) : (
            <p>Loading...</p>
        )
    );
}

export default HotNew;
