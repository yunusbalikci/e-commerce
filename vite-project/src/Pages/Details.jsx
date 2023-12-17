import React, { useState , useEffect} from "react"
import {useParams,useLocation} from 'react-router-dom'
 
export default function Details(){
    const {id} = useParams()
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}