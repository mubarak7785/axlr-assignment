import { useEffect, useState } from "react"
import { Navbar } from "../Navbar/navbar"

export const Products=()=>{

    const [data,setData]=useState()

    useEffect(()=>{
        fetch("https://api.earthsfresh.in/api/categories/getCategorylist").then(res=>res.json()).then(resut=>setData(resut.result))

       
    },[])

    
    return(
        <div>
            <Navbar/>
            
            
            <div className="display-pro">
              
           {data.map((e)=>{
          return(
            div(
                <h1>{e.categories.cat_code}</h1>
            )
          )
          
           })}
        
            </div>
        </div>
    )
}