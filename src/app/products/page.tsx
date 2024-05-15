import Image from "next/image";
//import Image from "../../../node_modules/next/image"

export default function Products(){
    return(
<div>
    <h1>PRODUCTS</h1>
    <Image style={{backgroundColor:'red'}} src='/next.svg' alt='' height={250} width={400}/>
    </div>
    )
}