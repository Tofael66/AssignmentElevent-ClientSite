import { useEffect, useState } from "react";
import ComingCard from "./ComingCard";
import Marquee from "react-fast-marquee";




const UpComingCars = () => {

    const [cars , setCars ] = useState([]) ;
//console.log(cars)
    useEffect( () => {
        fetch('up_data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    } ,[])

    return (
        <div className=" container px-6 py-10 mx-auto">
            <h1 className="text-4xl font-bold mb-2">Up Coming Cars</h1>
            <p className="mb-6">Turning dreams into reality with versatile vehicles.</p>
         <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {
                cars?.map(car => <ComingCard key={car.id} car={car}></ComingCard>)
            }
         </div>

         <div className="mt-20  mb-20 ">
            <Marquee>
    <div className="flex h-32 gap-3">
    {
        cars?.map(logos  =>  <img key={logos?.id} className="ml-3 bg-black" src={logos.carImages }></img>)
   } 
     {
        cars?.map(logos  =>  <img key={logos?.id} className="ml-3 bg-black" src={logos.carImages }></img>)
   } 
    </div>
            </Marquee>
         </div>
        </div>
    );
};

export default UpComingCars;