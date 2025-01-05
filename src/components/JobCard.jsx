/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import {format} from'date-fns' 
const JobCard = ({job}) => {
   // console.log(job)

  const { 
    Car_Model,
    buyer ,
    photo , 
  deadline ,
    Rental_Price , 
    Availability ,
    Registration_Number   ,
    location ,
    features ,
    _id ,
    bookingCount ,
      // max_price , 
   description
    } = job ;

   // console.log(description)
  return (
    
    <Link
      to={`/get-car/${_id}`}
      className='w-full  bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
    

<div className="card bg-base-100   shadow-xl">
  <figure className='h-48'>
  
    <img className=' h-full w-full' src={photo} alt="" />
 
  </figure>
 
  <div className="card-body">
    <h2 className="card-title">
     {Car_Model}
      <div className="badge badge-secondary">Features {features}</div>
    </h2>
    <p>Publish Date: {format (new Date (deadline) , 'P')}</p>
    <h3>Price per day:  {Rental_Price } $</h3>
    <p>{description?.substring(0 , 70)}....</p>

    <p className=''>BookingCount: {bookingCount}</p>
    <div className="card-actions justify-end">
      <div className="badge hover:bg-green-500 badge-outline">Book Now</div>
     
    </div>
  </div>
</div>

  
    </Link>
  )
}

export default JobCard
