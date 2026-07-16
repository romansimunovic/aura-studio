import {useState} from "react";

import {
SERVICES,
RESERVED
} from "../data/bookingConfig";

import {
generateSlots
} from "../utils/generateSlots";



export default function NailsMakeupBooking(){


const [date,setDate]=useState("");

const [service,setService]=useState("");

const [slots,setSlots]=useState([]);

const [selected,setSelected]=useState("");



function handleDate(e){

const value=e.target.value;

setDate(value);


if(value){

setSlots(
generateSlots(
value,
RESERVED
)
);

}

}



function submit(e){

e.preventDefault();


alert(
`Upit poslan:
${date}
${selected}
${SERVICES[service].name}`
);


}



return (

<div className="
w-full
max-w-lg
mx-auto
px-1
sm:px-0
overflow-hidden
">


<h2 className="font-serif text-3xl text-center mb-10">
Provjeri dostupnost termina
</h2>



<form

onSubmit={submit}

className="
w-full
space-y-5
"

>


<input

required

placeholder="Ime i prezime"

className="
w-full
max-w-full

p-4

border
border-[#EFCACF]

rounded-xl

text-sm

bg-white

box-border

"

/>



<input

required

type="tel"

placeholder="Telefon"

className="
w-full
max-w-full

p-4

border
border-[#EFCACF]

rounded-xl

text-sm

bg-white

box-border

"

/>



<select

required

onChange={e=>setService(e.target.value)}

className="
w-full
max-w-full

appearance-none

p-4

border
border-[#EFCACF]

rounded-xl

bg-white

text-sm

box-border

"

>


<option value="">
Odaberi uslugu
</option>


{Object.entries(SERVICES).map(([key,item])=>(

<option key={key} value={key}>

{item.name}

</option>

))}


</select>




<input

required

type="date"

onChange={handleDate}

className="
w-full
max-w-full

p-4

border
border-[#EFCACF]

rounded-xl

text-sm

bg-white

box-border

"

/>



{
slots.length>0 &&

<div>


<p className="text-xs uppercase mb-3">
Slobodni termini
</p>



<div

className="
grid

grid-cols-2
sm:grid-cols-3

gap-2

w-full

"

>


{slots.map(slot=>(

<button

disabled={!selected}

className="
w-full

max-w-full

bg-[#4A3E3F]

text-white

p-4

rounded-xl

text-sm

transition

disabled:opacity-40

"

>

{slot}

</button>


))}


</div>


</div>

}



<button

disabled={!selected}

className="w-full bg-[#4A3E3F] text-white p-4 rounded-xl"

>

Pošalji upit

</button>



</form>



</div>

);


}