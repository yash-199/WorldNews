import { useState } from 'react'
import LoginImage from "../assets/login-image.png"
const Register = () => {

    const [state, setState] = useState('Register')
    return (
        <div className="flex flex-col items-center justify-center">
            {/* // Register */}
            {
                state === 'Register' && (
                    <form action="" className=' py-4 px-10 mt-16 rounded shadow-2xl box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);'>
                        <div className='w-full'>
                            <p className='mt-4'>Name</p>
                            <input type="text" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                        </div>
                        <div className='w-full mt-2'>
                            <p className='mt-4'>Email</p>
                            <input type="email" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                        </div>
                        <div className='w-full mt-2'>
                            <p className='mt-4'>Password</p>
                            <input type="password" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                        </div>
                        <div className='w-full mt-2'>
                            <p className='mt-4'>Confirm Password</p>
                            <input type="password" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                        </div>
                        <button className='bg-black rounded text-white py-3 px-20 mt-6 mx-16 hover:scale-105 transition-all duration-500 cursor-pointer'>Register</button>
                        <p className='my-4'>Do you already have an account? <span onClick={() => setState('Login')}>Login Now</span></p>
                    </form>
                )}
            {/* // Register End */}
            {/* // Login Start */}
            {
                state === "Login" && (
                    <div className='flex items-start justify-between w-full max-sm:flex-col gap-10 px-4  lg:px-24 sm:mt-20'>
                        {/* Left Side */}
                        <div className='w-1/2 max-sm:w-full'>
                            <h1 className='lg:text-4xl'>Welcome back, there is the latest news today!!</h1>
                            <div className='flex max-sm:flex-col items-start justify-between gap-20'>
                                <div className='mt-10'>
                                    <div className='relative w-90'>
                                        <img src={LoginImage} alt="" className=' rounded' />
                                        {/* Black overlay */}
                                        {/* <div className='absolute inset-0 bg-black opacity-1 rounded'></div> */}

                                        <p className='absolute right-4 transform -translate-y-1/2 text-white text-sm bg-blue-700 px-3 py-1 rounded' style={{ top: "12%" }}>
                                            Entertainment
                                        </p>
                                        <p className='absolute px-4 py-1 transform -translate-y-7 text-sm text-white bg-black bg-opacity-30 w-full'>Ukraine, 24 april 2022</p>
                                    </div>

                                    <div>
                                        <p className='text-lg font-semibold pr-10 py-5'>Zelensky accuses Russia of worst crimes since WW2</p>
                                        <p className='text-sm leading-6 text-slate-500 text'>The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor</p>
                                        <button className='bg-black py-2 px-10 text-white rounded my-10'>Read More</button>
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <div className='relative w-90'>
                                        <img src={LoginImage} alt="" className=' rounded' />
                                        <p className='absolute right-4 transform -translate-y-1/2 text-white text-sm bg-blue-700 px-3 py-1 rounded' style={{ top: "12%" }}>World News</p>
                                        <p className='absolute px-4 py-1 transform -translate-y-7 text-sm text-white bg-black bg-opacity-30 w-full'>Ukraine, 24 april 2022</p>
                                    </div>
                                    <div>
                                        <p className='text-lg font-semibold pr-10 py-5'>Zelensky accuses Russia of worst crimes since WW2</p>
                                        <p className='text-sm leading-6 text-slate-500 text'>The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor</p>
                                        <button className='bg-black py-2 px-10 text-white rounded my-10'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/2 max-sm:w-full'>
                            <form action="" className=' py-4 px-10  rounded shadow-2xl box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);'>
                                <div className='w-full'>
                                    <p className='mt-4'>Name</p>
                                    <input type="text" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                                </div>
                                <div className='w-full mt-2'>
                                    <p className='mt-4'>Email</p>
                                    <input type="email" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                                </div>
                                <div className='w-full mt-2'>
                                    <p className='mt-4'>Password</p>
                                    <input type="password" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                                </div>
                                <div className='w-full mt-2'>
                                    <p className='mt-4'>Confirm Password</p>
                                    <input type="password" className='border border-black rounded-full w-full p-2 mt-2' name="" id="" />
                                </div>
                                <button className='bg-black rounded text-white py-3 px-20 mt-6 mx-16 hover:scale-105 transition-all duration-500 cursor-pointer'>Register</button>
                                <p className='my-4'>Do't you already have an account? <span onClick={() => setState('Register')}> Register</span></p>
                            </form>
                        </div>
                    </div>

                )
            }
        </div>



    )
}

export default Register