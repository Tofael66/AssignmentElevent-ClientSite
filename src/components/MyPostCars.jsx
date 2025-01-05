import { Link } from "react-router-dom";

import {format} from'date-fns' 
import Swal from "sweetalert2";


const MyPostCars = ({mypost}) => {
//console.log(mypost) ;
const {Car_Model,
    emails ,
    _id , 
      names , 
      photos, 
       deadline ,
      Rental_Price , 
      Availability ,
      Registration_Number   ,
      location ,
      features ,
      photo , 
      bookingCount ,
        // max_price , 
     description} = mypost ;


 

        const deleteFuntion = _id =>{
         // console.log(_id)
 //console.log('id delete')
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://server-ten-pink-24.vercel.app/get-car/${_id}`, {
                method:'DELETE'
              })
              .then( res => res.json())
              .then(data => {
               // console.log(data) ; 
                if(data.deletedCount > 0 ){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your review has been deleted.",
                    icon: "success"
                  });
                }
              })

             
              
            }
          });
          }




    return (

        

    <tbody className=' divide-y divide-gray-200 w-full'>
                  <tr>
                    <td className='px-4 py-4 md:flex items-center text-sm text-purple-600  whitespace-nowrap'>
                    <p className=" overflow-hidden w-16 mr-2 font-bold"> {Car_Model} </p>

                    <div className="w-16 h-16">
                    <img className="h-full w-full rounded-full" src={photo} alt="" />
                    </div>
                    </td>

           

                    <td className='px-4 py-4 text-sm text-purple-600  whitespace-nowrap'>
                    <p>{format (new Date (deadline) , 'P')}</p>
                    </td>

                    <td className='px-4 py-4 font-bold text-sm text-purple-600  whitespace-nowrap'>
                   { Rental_Price } $
                    </td>
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-2'>
                        <p
                          className={`px-3 py-1  text-purple-600  bg-blue-100 text-xs  rounded-full`}
                        >
                        {Availability}
                        </p>
                      </div>
                    </td>
                   
                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        <button onClick={ () => deleteFuntion(_id)} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                       
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                            />
                          </svg>
                        </button>

                        <Link
                          to={`/update/${_id}`}
                          className='text-purple-600  transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                        >
                       
                          Update Now
                          
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody> 
       
    );
};

export default MyPostCars;