'use client'

import { useRouter } from "next/navigation";

export default function Staff(){

 const router = useRouter()

 //router.push('/staff/11')
 router.replace('/staff/22')

    return (
        <div>
           <h1>Our staff</h1> 

        </div>
    )
}
