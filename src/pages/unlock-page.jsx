import React from 'react'
import logo1 from '../assets/visit.svg';

function UnlockPage() {
  return (
    <>
    <div className='w-11/12 flex flex-col-reverse md:flex-row text-blue-200'>
        <div className='w-full md:w-7/12 flex flex-col justify-center py-4 md:py-20'>
            <p className='text-3xl lg:text-5xl font-bold'>Unlock Your Growth Potential</p>
            <p className='text-xl sm:text-2xl lg:text-3xl py-2 sm:py-4 font-bold opacity-80'>Empowering Your Bussiness Journey</p>
        
            <div className='text-xl sm:text-2xl lg:text-3xl text-zinc-400 font-semibold space-y-4 my-8'>
                <p className='flex'>Inspirational Bussiness Quotes</p>
                <p className='flex'>Daily Growth Tips</p>
                <p className='flex'>Curated articles on success strategies</p>
                <p className='flex'>Entrepreneurial Case Studies</p>
                <p className='flex'>Free Tools for mindset Development</p>
            </div>
            <div className='flex space-x-2'>
                <button className='mr-3 sm:mr-6 h-12 w-44 rounded-md text-emerald-900 text-xl font-semibold ring-4 ring-emerald-296/60 bg-emerald-200 hover:bg-emerald-300 active:scale-95 transition-all ease-in-out'>
                    Explore Quotes
                </button>
                
                <button className='h-12 w-44 rounded-md text-amber-900 text-xl font-semibold ring-4 ring-amber-300/50 bg-amber-200 hover:bg-amber-300 active:scale-95 transition-all ease-in-out'>
                    Read Articles
                </button>
            </div>
        </div>
        <div className='w-full md:w-6/12 flex flex-col justify-center items-center'>
            <img src={logo1}></img>
        </div>
    </div>
    </>
  )
}

export default UnlockPage