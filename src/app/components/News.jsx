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
  return (
    <div>
        <p>{data && data.articles[0].title}</p>
    </div>
  )
}

export default News