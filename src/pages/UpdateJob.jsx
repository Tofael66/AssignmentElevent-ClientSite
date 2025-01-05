import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const UpdateJob = () => {
const upDateCars =useLoaderData() ;
// console.log(upDateCars)
  const navigate = useNavigate() ;
  const [startDate, setStartDate] = useState(new Date())


  const {_id } = upDateCars ;


  const handleSubmitFromUpdate = (e) =>{
    e.preventDefault()
    
    const from = e.target ;
    const Car_Model = from.Car_Model.value ;
    
    //const deadline = startDate ;
    
    const Rental_Price = parseFloat(from.Rental_Price.value) ;
    const Availability = parseFloat(from.availability.value) ;
    const location = from.location.value ;
    const photo = from.photo.value ;
    const deadline = startDate ;
    const features = from.features.value ;
    const bookingCount = parseFloat(from.bookingCount.value) ;
    const Registration_Number= (from.Registration_Number.value) ;
    // const max_price = parseFloat (from.max_price.value) ;
    const description =from.description.value ;
    
    const fromDataupDated ={
      Car_Model,

       deadline ,
      Rental_Price , 
      Availability ,
      Registration_Number   ,
      location ,
      features ,
      photo , 
      bookingCount ,
        // max_price , 
     
        description
      }
    
    //console.log(fromData)
    
    // put methohd 
    try{
      fetch(`https://server-ten-pink-24.vercel.app/get-car/${_id}`  , {
        method:'PUT' ,
        headers:{
            'content-type' : 'application/json'
        } ,
        body:JSON.stringify(fromDataupDated)
      })
      .then(res => res.json()) 
      .then(data => {
         //console.log(data)
         if(data.modifiedCount > 0 ){
             Swal.fire({
                 title: 'Success!',
                 text: 'your car Data is SuccesFully Added ',
                 icon: 'success',
                 confirmButtonText: 'Cool'
               })
         }
         from.reset()
         navigate('/my-posted-cars')
      }) 
    }
    catch (error){
    // console.log(error)
    toast.error(error.message)
    }
    
  }



  return (
  



    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
    <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
      <h2 className='text-lg font-semibold text-gray-700 capitalize '>
   Update Car
      </h2>

      <form onSubmit={handleSubmitFromUpdate}>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label className='text-gray-700 ' htmlFor='job_title'>
            Car Model
            </label>
            <input
              id='job_title'
              name='Car_Model'
              type='text' 
              defaultValue={upDateCars.Car_Model}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

       

          <div>
            <label className='text-gray-700 ' htmlFor='max_price'>
            Daily Rental Price
            </label>
            <input
              id='Rental_Price'
              name='Rental_Price'
              type='number'
              defaultValue={upDateCars.Rental_Price}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>
          
          <div>
            <label className='text-gray-700 ' htmlFor='job_title'>
            Availability
            </label>
            <input
              id='availability'
              name='availability'
              defaultValue={upDateCars.Availability}
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700'>Deadline</label>

            {/* Date Picker Input Field */}
            <DatePicker
              className='border p-2 rounded-md'
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>

          <div>
            <label className='text-gray-700 ' htmlFor='job_title'>
            Vehicle Registration Number
            </label>
            <input
              id='Availability'
              name='Registration_Number'
              defaultValue={ upDateCars.Registration_Number }
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 ' htmlFor='job_title'>
            Images
            </label>
            <input
              id='photo'
              name='photo'
              defaultValue={upDateCars.photo}
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          
         

          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700 ' htmlFor='category'>
            Location
            </label>
            <select
              name='location'
              id='location'
              defaultValue={upDateCars.location}
              className='border p-2 rounded-md'
            >
              <option value='Dhaka'>Dhaka</option>
              <option value='Bogura'> Bogura</option>
              <option value='Rangpur'>Rangpur</option>
              <option value='Narsingdi'>Narsingdi</option>
              <option value='Cumilla'>Cumilla</option>
              <option value='Chittogram'>Chittogram</option>
              <option value='Dinajpur'>Dinajpur</option>
            

            </select>
            
          </div>
          {/* <div>
            <label className='text-gray-700 ' htmlFor='emailAddress'>
              Email Address
            </label>
            <input
              id='emailAddress'
              type='email'
              name='email'
              defaultValue={user?.email}
              // readOnly
              disabled={true}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div> */}
         

          <div className='flex flex-col gap-2 '>
            <label className='text-gray-700 ' htmlFor='category'>
            Features
            </label>
            <select
              name='features'
              id='features'
              className='border p-2 rounded-md'
            >
              <option value='e.g'>e.g.</option>
              <option value='GPS'> GPS</option>
              <option value='AC'>AC</option>
       
           

            </select>
            
          </div>
          <div>
            <label className='text-gray-700 ' htmlFor='min_price'>
            bookingCount
            </label>
            <input
              id='bookingCount'
              name='bookingCount'
              type='number'
              
              defaultValue={upDateCars.bookingCount}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

      
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          <label className='text-gray-700 ' htmlFor='description'>
            Description
          </label>
          <textarea
          defaultValue={upDateCars.description}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            name='description'
            id='description'
          ></textarea>
        </div>
        <div className='flex justify-end mt-6'>
          <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
           Update Save
          </button>
        </div>
      </form>
    </section>
  </div>
  )
}

export default UpdateJob
