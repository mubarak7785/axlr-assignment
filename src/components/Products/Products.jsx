import { useEffect, useState } from "react"
import { Navbar } from "../Navbar/navbar"

export const Products=()=>{

    const [data,setData]=useState()

    useEffect(()=>{
        
    fetch("https://api.earthsfresh.in/api/categories/getCategorylist").then(res=>res.json()).then(resut=>setData(resut))

    },[])

    
    return(
        <div>
            <Navbar/>
            
            
            <div className="display-pro">
              {/* {data.map((e)=>{
                // console.log(e)
                return(
                    <div>

                    </div>
                )
              })} */}
               
            </div>
        </div>
    )
}