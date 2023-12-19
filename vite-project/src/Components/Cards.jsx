import { useState,useNavigate,useEffect } from "react";
import axios from 'axios'



export default function Cards(){
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
    console.log(allData);

    },[])

    return(
        <div className="container  mb-5">
            <div className="flex ml-5 flex-wrap">
                {allData.map((data, index) => (
                <div class="max-w-sm rounded mb-4 overflow-hidden ml-3 shadow-lg">
                    <div class="w-64 h-full mb-4 border-4 hover:border-orange-400 duration-200 border-opacity-30 bg-white  item-center justify-center mx-auto shadow-lg " key={index}>
                        <img class="w-full h-40 md:h-60 p-3 sm:h-48 mx-auto rounded-3xl object-scale-down" src={data.image} alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-center text-xl mb-2">{data.title}</div>
                            <p class="text-gray-700 uppercase text-base text-center">
                            {data.category}
                            </p>                    
                        </div>
                        <button className="bg-orange-400 flex  hover:bg-orange-500 text-white font-bold py-2   mx-auto items-center justify-center mb-2 px-4 rounded-full ">
                        Add to card
                    </button>
                    </div>
                </div>
                ))}
                </div>
            </div>        

    )
}