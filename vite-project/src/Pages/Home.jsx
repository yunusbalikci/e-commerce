import {useNavigate} from 'react-router-dom'
import React, { useState , useEffect} from "react"
import Header from '../Components/Header'
import Section from '../Components/Section'
import Categories from '../Components/Categories'

export default function Home(){
    
    
    return  (
        
        <div>
            <Header></Header>
            <Section></Section>
            <Categories></Categories>

            
        </div>
      )
    }