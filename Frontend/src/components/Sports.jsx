import { useEffect, useState } from 'react';
import Sports1 from '../assets/Sports (1).png'; // Fallback image
import { useNavigate } from 'react-router-dom';

const Sports = () => {
    const [sports, setSports] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSports = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=321e29923f4d483ebca260b3fe5304a8');
                const jsonData = await response.json();

                if (jsonData.articles) {
                    setSports(jsonData.articles); // Use 'articles' instead of 'news'
                    console.log("Sports News:", jsonData.articles);
                } else {
                    console.error('No Sports News data found');
                }
            } catch (error) {
                console.log('Error fetching Sports News', error);
            }
        };
        fetchSports();
    }, []);

    return (
        <div className='w-full mt-16 px-4 md:px-8 lg:px-16'>
            <div className='flex items-start md:items-start justify-between'>
                <p className='text-2xl md:text-3xl pt-4 font-semibold text-black'>Sports</p>
                <button className='bg-blue-950 text-white px-10 py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-100 transition-all duration-150'>View All</button>
            </div>
            <hr className='my-4 bg-black h-0.5' />
            {
                sports.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                        {sports.slice(0, 3).map((newItem, index) => (
                            <div className='relative w-90' key={index}>
                                <img
                                    className='drop-shadow-lg rounded w-full h-60 object-cover'
                                    src={newItem.urlToImage || Sports1} // Use fallback image if no image is available
                                    alt={newItem.title}
                                />
                                <p className='absolute right-4 transform -translate-y-7 text-sm text-white bg-green-700 px-3 py-1 rounded' style={{ top: "12%" }}>Sports</p>
                                <p className='w-full absolute px-4 py-1 transform -translate-y-7 text-sm text-white bg-black bg-opacity-30'>{newItem.country || 'Unknown'}, {new Date(newItem.publishedAt).toLocaleDateString()}</p>
                                <p className='text-lg my-5 font-semibold'>{newItem.title}</p>
                                <p className='text-sm text-slate-500'>{newItem.description}</p>
                                <button onClick={() => navigate('/sport-news')} className='mt-6 bg-blue-950 text-white px-10 py-3 rounded hover:text-blue-950 hover:bg-white border border-black hover:scale-100 transition-all duration-150'>Read More</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading Sports News...</p>
                )
            }
        </div>
    );
};

export default Sports;
