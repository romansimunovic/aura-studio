import {motion} from "framer-motion";


const images=[

{
id:1,
cat:"mladenke",
src:"/images/makeup1.jpg"
},

{
id:2,
cat:"glam",
src:"/images/makeup2.jpg"
},

{
id:3,
cat:"prirodni",
src:"/images/makeup3.jpg"
},

{
id:4,
cat:"glam",
src:"/images/makeup4.jpg"
}

];



export default function Gallery({setImage}){


return (

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">


{images.map(img=>(


<motion.img

whileHover={{scale:1.03}}

key={img.id}

src={img.src}

onClick={()=>setImage(img.src)}

className="aspect-square object-cover rounded-xl cursor-pointer"

/>


))}


</div>

);


}