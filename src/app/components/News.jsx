"use client";
import React, { useEffect, useState } from 'react'
import api from '../(api)/api'


const News = ({topic}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        api(topic).then((data) => {
            setData(data);
        }).catch(() => {
            console.log("Error getting an response from the API");
        })
    },[])
    console.log(data);
  return (
    <section className='flex flex-col px-2 justify-center items-center'>
    <h3 className=' font-bold text-center my-4'>{topic} Updates</h3>
    <div className='news__wrapper py-5 px-2 flex flex-wrap justify-between items-center container gap-10'>
    {data &&
      data.articles.map((ele) =>
        ele.urlToImage ? (
          <div className='news__item flex flex-col max-w-[350px] w-full border-full-color p-2 rounded-xl' key={ele.id}>
            <div className='news__item--img'>
              <img src={ele.urlToImage} alt={ele.id} className='rounded-xl object-cover max-w-[350px] max-h-[200px]' />
            </div>
  
            <div className='news__item--info mt-4 text-ellipsis max-h-[110px] h-full'>
              <div className='max-h-[70px] h-full overflow-hidden text-ellipsis'>
                <p className='text-ellipsis'>{ele.description}</p>
              </div>
              <div className='news__item--content text-ellipsis overflow-hidden max-h-[200px] h-full mt-4'>
                <span className='mini__text text-slate-300 truncate'>{ele.content}</span>
              </div>
            </div>
            <div className='news__item--footer mt-4 flex justify-between'>
              <span className='text-xs text-slate-400 truncate'>{ele.author}</span>
              <span className='text-xs text-slate-400 truncate'>{ele.publishedAt}</span>
            </div>

            <div className='my-4'>
              <a href={ele.url} target='_blank' className='bg-primary text-white flex px-2 py-2 hover:bg-white hover:text-black rounded-full text-center justify-center ease-in duration-150 font-semibold'>
                Read More...
              </a>
            </div>
          </div>
        ) : null
      )}
  </div>
      </section>
  )  
}

export default News