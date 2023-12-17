import {useNavigate} from 'react-router-dom'
import React, { useState , useEffect} from "react"
import axios from 'axios'
import Header from '../Components/Header'
import Section from '../Components/Section'

export default function Home(){
    const navigate = useNavigate()
    const [allData,setAllData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
       const getData = async() => {
        setLoading(true)
           const {data} = await axios.get('https://fakestoreapi.com/products')
           setAllData(data)
           setLoading(false)
        }
       getData()
    },[])

    console.log(allData)
    
    return loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
            <Header></Header>
            <Section></Section>
            <div className='container mt-3 flex flex-wrap justify-center py-3 space-y-4 space-x-10 text-center'>
            {allData?.map((data, index) => (
            <div className='mt-4 ml-8 rounded overflow-hidden w-64 h-64 md:w-80 md:h-auto shadow-md bg-white' key={index}>
              <div className='w-auto h-full bg-gray-200 item-center justify-center mx-auto shadow-lg '>
                <h1 className='text-2xl font-bold text-white p-4'>{data.title}</h1>
                <img className='w-full h-40 md:h-60 sm:h-48 mx-auto rounded-3xl object-scale-down' src={data.image} alt="" />
                <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 mt-2 mb-2 px-4 rounded-full' onClick={() => navigate(`/details/${data.id}`)}>View Details</button>
              </div>
            </div>
          ))}
          </div>
        </div>
      );
    }