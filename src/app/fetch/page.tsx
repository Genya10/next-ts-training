import Products from "../products/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title:'Products',
  
}

export const revalidate = 360
// SSR, ISR, SSG

const fetchData = async()=>{
    const response = await fetch('https://api.example.com/products',{
        cache:'force-cache',
        next:{
            revalidate:360
        }
    })
    const data = await response.json()
    return data
}

export default async function Page(){
    const data = await fetchData()

    if(!data) notFound()

    return <Products/>
}