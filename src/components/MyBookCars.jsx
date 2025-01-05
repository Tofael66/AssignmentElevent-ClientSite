
import {format} from'date-fns' 
import { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker'
import toast from 'react-hot-toast';
// import { CgFormatLineHeight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const MyBookCars = ({mybook}) => {
     //console.log(mybook)
  const navigate = useNavigate()
     const {bookModel, bookImg , deadline , bookLocation ,bookEmail , _id ,  bookPrice , endDated } = mybook ;

   const [startDate, setStartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())


 // cancel 
 const deleteFuntion = _id =>{

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
       fetch(`https://server-ten-pink-24.vercel.app/get-book/${_id}`, {
         method:'DELETE'
       })
       .then( res => res.json())
       .then(data => {
         console.log(data) ; 
         console.log(_id)
         if(data.deletedCount > 0 ){
           Swal.fire({
             title: "Deleted!",
             text: "Your Booking has been deleted.",
             icon: "success"
           });
         }
       })
     }
   });
   }
 


   // updated dated

   const handleSubmitFromUpdate = (e ) =>{
    e.preventDefault()
    console.log('modify date')


    const deadline = startDate ;
    const endDated = endDate ;
    
    
    
    const fromDataupDates ={
       deadline , 
       endDated 
      }
    
console.log(fromDataupDates)
    
    // put methohd 
    try{
      fetch(`https://server-ten-pink-24.vercel.app/get-book/${_id}`  , {
        method:'PUT' ,
        headers:{
            'content-type' : 'application/json'
        } ,
        body:JSON.stringify(fromDataupDates)
      })
      .then(res => res.json()) 
      .then(data => {
         console.log(data)
         if(data.modifiedCount > 0 ){
             Swal.fire({
                 title: 'Success!',
                 text: 'your car Data is SuccesFully Added ',
                 icon: 'success',
                 confirmButtonText: 'Cool'
               })
         }
        
         navigate('/')
      }) 
    }
    catch (error){
    // console.log(error)
    toast.error(error.message)
    }
    
  }







   

    return (
     <tbody className=' divide-y divide-gray-200 w-full'>
                      <tr>
                        <td className='px-4 py-4 md:flex items-center text-sm text-purple-600  whitespace-nowrap'>
                        <p className=" overflow-hidden w-16 mr-2 font-bold"> {bookModel} </p>
    
                        <div className="w-16 h-16">
                        <img className="h-full w-full rounded-full" src={bookImg} alt="" />
                        </div>
                        </td>
                     
    
            
    
                        <td className='px-4 py-4 text-sm text-purple-600  whitespace-nowrap'>
                   
                        <p>{format (new Date (deadline) , 'P')}</p>
                        </td>


                        <td className='px-4 py-4 text-sm text-purple-600  whitespace-nowrap'>
                   
                   <p>{format (new Date (endDated ) , 'P')}</p>
                   </td>
    
                        <td className='px-4 py-4 font-bold text-sm text-purple-600  whitespace-nowrap'>
                   {bookPrice} $
                        </td>
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-2'>
                           <p className='bg-yellow-100 text-black px-2 rounded-md'>
                             pending
                           </p>
                          </div>
                        </td>
                       
                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-6'>
                         
                          <div className="flex flex-col space-y-2">
                            <button onClick={ () => deleteFuntion(_id)}  className='bg-red-600 px-2 py-0.5 rounded-md '>Cancel</button>

                        <button onClick={()=>document.getElementById('my_modal_1').showModal()} className='bg-yellow-800 px-2 py-0.5 rounded-md '>Modify Date</button>
                          </div>

                          {/* show modal */}
                          <form onSubmit={handleSubmitFromUpdate} >
<dialog id="my_modal_1" className="modal ">

<div className="modal-box  bg-purple-950">
    <h3 className="font-bold mb-2 text-2xl"> Modify your Date</h3>

   <div>
     
    
   <label className=''>Car-Model :  </label>
    <input className='py-2' type="text" name="bookModel" id="" defaultValue={bookModel} disabled />
  <div className="w-full space-y-3">

  <div >
  <label className=''>img :   </label>
  <input className='py-2' type="text" name="bookImg" id="" defaultValue={bookImg }  disabled />
 <br />
  </div>

  <label className=''>location  </label>
<input className='py-2' type="text" name="bookLocation" id="" defaultValue={bookLocation }  disabled />
 <br />
  <label className=''> Total  Price : $ </label>
  <input className='py-2' type="text" name="bookPrice" id="" defaultValue={bookPrice}  disabled />


 

<p>Start Date:</p>


  <DatePicker 
                className='border p-2 w-full rounded-md' name='dated'
                selected={startDate}
                onChange={date => setStartDate(date)}
                defaultValue={deadline}
              />
              <br />


              <p>End Date:</p>


  <DatePicker 
                className='border p-2 w-full rounded-md' name='datedd'
                selected={endDate}
                defaultValue={endDated}
                onChange={datedd => setendDate(datedd)}
             
              />
              <br />
          
       

 
<button  className='btn  bg-orange-900 '>Modify Date</button>
   </div>
 
  </div>
    <div className="modal-action  "  >
      <form method="dialog">
 <div   className="">

 </div>
        {/* if there is a button in form, it will close the modal */}

        <button className="btn">
        Close</button>
      </form>
    </div>
  </div>
</dialog>
</form>
                
                          </div>
                        </td>
                      </tr>
                    </tbody> 
    );
};

export default MyBookCars;