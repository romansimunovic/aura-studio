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

<div className="max-w-lg mx-auto">


<h2 className="font-serif text-3xl text-center mb-10">
Provjeri dostupnost termina
</h2>



<form
onSubmit={submit}
className="space-y-5"
>


<input

required

placeholder="Ime i prezime"

className="w-full p-4 border rounded-xl"

/>



<input

required

type="tel"

placeholder="Telefon"

className="w-full p-4 border rounded-xl"

/>



<select

required

onChange={e=>setService(e.target.value)}

className="w-full p-4 border rounded-xl"

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

className="w-full p-4 border rounded-xl"

/>



{
slots.length>0 &&

<div>


<p className="text-xs uppercase mb-3">
Slobodni termini
</p>



<div className="grid grid-cols-3 gap-2">


{slots.map(slot=>(

<button

type="button"

key={slot}

onClick={()=>setSelected(slot)}

className={`p-3 rounded-lg text-sm ${
selected===slot
?
"bg-[#4A3E3F] text-white"
:
"bg-[#FDF5F6]"
}`}

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