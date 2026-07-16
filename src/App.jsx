import React, { useState } from "react";
import { MapPin, Clock, Palette, Brush, Sparkles } from "lucide-react";

import NailsMakeupBooking from "./components/NailsMakeupBooking";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";


const SALON_CONFIG = {

  name: "AT Makeup",

  owner: "Tea Andrašić",

  address:
    "Ul. Ljudevita Gaja 72, 35400, Nova Gradiška",

  hours:
    "PON-NED: 07:00 - 22:00",


  social: {

    instagram:
      "https://www.instagram.com/a.t___makeup/",

    facebook:
      "https://www.facebook.com/p/AT-Makeup-obrt-za-%C5%A1minkanje-100094690771689/"

  },


  services:[

    {
      title:"Šminkanje za mladenke",
      desc:"Besprijekoran look za tvoj najvažniji dan.",
      price:"Na upit"
    },


    {
      title:"Večernji makeup",
      desc:"Glam look koji traje cijelu noć.",
      price:"50 €"
    },


    {
      title:"Dnevni makeup",
      desc:"Svježina i naglašena prirodna ljepota.",
      price:"35 €"
    },


    {
      title:"Edukacije",
      desc:"Naučite tehnike prilagođene vašem licu.",
      price:"Na upit"
    }

  ]

};



export default function App(){


const [selectedImage,setSelectedImage] = useState(null);



return (

<div className="
min-h-screen
bg-[#FFFDFE]
text-[#4A3E3F]
font-sans
scroll-smooth
">



{/* NAV */}

<nav
className="
fixed
top-0
left-0
w-full
z-50

bg-[#FFFDFE]/80
backdrop-blur-md

px-6
py-4

flex
justify-between
items-center

border-b
border-[#FDF5F6]
"
>


<h1 className="
font-serif
text-lg
tracking-widest
">

{SALON_CONFIG.name}

</h1>



<div className="flex gap-4 text-xs font-bold">


<a

href={SALON_CONFIG.social.instagram}

target="_blank"

rel="noreferrer"

className="hover:text-[#C98B94]"

>
IG
</a>



<a

href={SALON_CONFIG.social.facebook}

target="_blank"

rel="noreferrer"

className="hover:text-[#C98B94]"

>
FB
</a>


</div>


</nav>







{/* HERO */}


<header

className="
h-[90vh]

flex
flex-col
items-center
justify-center

text-center

px-6

bg-gradient-to-b
from-[#FDF5F6]
to-transparent

"

>


<p className="
text-[10px]
uppercase
tracking-[0.4em]

mb-4

text-[#C98B94]
">

Profesionalno šminkanje & edukacije

</p>



<h1 className="
font-serif
text-5xl
md:text-7xl

leading-tight

mb-6
">

Istakni svoju

<br/>

prirodnu ljepotu

</h1>



<div className="flex gap-4">


<a

href="#booking"

className="
bg-[#4A3E3F]
text-white

px-8
py-3

rounded-full

text-xs

uppercase

tracking-widest
"

>

Rezerviraj

</a>



<a

href="#gallery"

className="
border
border-[#4A3E3F]

px-8
py-3

rounded-full

text-xs

uppercase

tracking-widest
"

>

Radovi

</a>



</div>



</header>









<main
className="
w-full
max-w-4xl
mx-auto

px-4
sm:px-6

py-10

space-y-24

overflow-x-hidden
"
>






{/* TRUST */}

<section

className="
flex
justify-center
gap-10

py-8

border-y
border-[#FDF5F6]
"

>


<div className="text-center">

<p className="text-2xl font-serif">
5.0★
</p>

<span className="text-[10px] uppercase opacity-60">
Google ocjena
</span>

</div>



<div className="text-center">

<p className="text-2xl font-serif">
28+
</p>

<span className="text-[10px] uppercase opacity-60">
Recenzija
</span>

</div>




<div className="text-center">

<p className="text-2xl font-serif">
1-na-1
</p>

<span className="text-[10px] uppercase opacity-60">
Pristup
</span>

</div>


</section>









{/* SERVICES */}


<section>


<h2 className="
font-serif
text-3xl
text-center
mb-12
">

Usluge

</h2>



<div className="
grid
md:grid-cols-2
gap-4
">


{SALON_CONFIG.services.map((service,index)=>(


<div

key={index}

className="
p-6

border
border-[#FDF5F6]

rounded-2xl

hover:shadow-lg

transition

"

>


<h3 className="
font-serif
text-xl
mb-2
">

{service.title}

</h3>


<p className="text-xs opacity-70 mb-4">

{service.desc}

</p>


<span className="
text-[#C98B94]
text-xs
font-bold
">

{service.price}

</span>


</div>


))}



</div>


</section>









{/* GALLERY */}

<section id="gallery">


<h2 className="
font-serif
text-3xl
text-center
mb-10
">

Galerija radova

</h2>


<Gallery
setImage={setSelectedImage}
/>


</section>









{/* WHY */}


<section>


<h2 className="
font-serif
text-3xl
text-center
mb-12
">

Zašto AT Makeup?

</h2>



<div className="
grid
md:grid-cols-3
gap-8
">


{[
  {
    icon: <Palette />,
    title: "Individualnost",
    text: "Svako lice ima svoju priču koju ističemo."
  },

  {
    icon: <Brush />,
    title: "Pedantnost",
    text: "Svaki detalj je precizno planiran."
  },

  {
    icon: <Sparkles />,
    title: "Kvaliteta",
    text: "Premium proizvodi za dugotrajnost."
  }

].map((item,index)=>(

  <div
    key={index}
    className="text-center"
  >

    <div className="
      text-[#C98B94]
      flex
      justify-center
      mb-4
    ">
      {item.icon}
    </div>


    <h3 className="
      uppercase
      font-bold
      text-sm
    ">
      {item.title}
    </h3>


    <p className="
      text-xs
      opacity-70
      mt-2
    ">
      {item.text}
    </p>

  </div>

))}



</div>


</section>









{/* BOOKING */}


<section id="booking">


<NailsMakeupBooking/>


</section>









{/* LOCATION */}


<section className="
grid
md:grid-cols-2
gap-12
">


<div>


<h2 className="
font-serif
text-3xl
mb-4
">

Posjetite nas

</h2>



<p className="
flex
gap-2
text-xs
mb-3
">

<MapPin size={16}/>

{SALON_CONFIG.address}

</p>



<p className="
flex
gap-2
text-xs
">

<Clock size={16}/>

{SALON_CONFIG.hours}

</p>


</div>





<iframe

title="AT Makeup lokacija"

loading="lazy"

className="
h-64
rounded-3xl
w-full
"

src="
https://maps.google.com/maps?q=Ul.%20Ljudevita%20Gaja%2072%20Nova%20Gradi%C5%A1ka&output=embed
"

/>



</section>



</main>









<footer

className="
bg-[#4A3E3F]

text-white

py-12

text-center

text-xs

uppercase
"

>


© 2026 {SALON_CONFIG.name} • {SALON_CONFIG.owner}


</footer>







{/* GLOBAL LIGHTBOX */}

<Lightbox

image={selectedImage}

setImage={setSelectedImage}

/>



</div>


);

}