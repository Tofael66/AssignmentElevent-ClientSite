import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {compareAsc, format} from'date-fns' 
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { useLoaderData, useParams} from 'react-router-dom'
import { AuthContext } from './../providers/AuthProvider';
import { useContext } from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'


const JobDetails = () => {
 const {user } = useContext(AuthContext)
console.log(user)
const navigated = useNavigate() ;
 
const { email , photoUrl , displayName} = user.reloadUserInfo ;
  // console.log(email)
//console.log(email , photoUrl, displayName)

  const [fined , setFined] = useState([])
 
 const {id} = useParams() ;
   // console.log(id)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())

  const allDeatils = useLoaderData() ;
  // console.log(allDeatils)

  useEffect( () =>{
    // const findData = [...brand].find(p => p.id == id) 
    // setData(findData)
    const findBYAllCars = allDeatils?.find(cars => cars._id == id)
    setFined(findBYAllCars)
   


   } ,[allDeatils, id])
 
   console.log(fined)

    const {  Car_Model, deadline , emails, 
      Rental_Price ,  Availability , Registration_Number , location , features , photo , bookingCount ,
        description} = fined ;


        // handle submit 

        const hanDleSubmit  = (e) => {
          e.preventDefault()

          const from = e.target ;
 const deadline = startDate ;
const endDated = endDate ;
const bookEmail = email ;
const postBuyerEmail = emails ; 
const bookModel = from.bookModel.value ;
const bookImg = from.bookImg.value ;
const bookId = id ;
const bookPrice =parseFloat(from.bookPrice.value)  ;
const bookLocation = from.bookLocation.value ;
//console.log(bookId)
// console.log(endDated)
//1 . deateLine Crose Validation

// if(compareAsc (new Date() , new Date(deadline)) === 1) return toast.error('DateLine Crossed  , Bidding Forbidden')


  // 2. check buyer book ki na 
  if(emails === bookEmail ){
    return toast.error('Action not permition')
  }


const bookDatas= {bookModel, bookImg , deadline , bookLocation ,bookEmail ,  bookPrice , bookId , postBuyerEmail , endDated  }
// toast('Confirm SuccessFully')
console.log(bookDatas)


// 







try{
  fetch('https://server-ten-pink-24.vercel.app/add-book'  , {
    method:'POST' ,
    headers:{
        'content-type' : 'application/json'
    } ,
    body:JSON.stringify(bookDatas)
  })
  .then(res => res.json()) 
  .then(data => {
     console.log(data)
     if(data.insertedId){
         Swal.fire({
             title: 'Success!',
             text: 'your car add ',
             icon: 'success',
             confirmButtonText: 'Cool'
           })
     }
     // from.reset()
     navigated('/my-bids')
  }) 
}   catch(err){
  console.log( 'ami error' , err)
console.log(err.message)
toast.error(err.message)
}

 }


        // bookData post mongodb 
        // post methohd 





  return (
  

    <div className="">
     <div className="max-w-2xl mx-auto  py-10 ">
            <div className="card bg-stone-700 p-5 md:p-10 shadow-xl">
  <figure className="h-60 ">
    <img className="h-full w-full"
      src={photo }
      alt="Shoes" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">
     Name: {Car_Model}
    </h2>
    <div className="flex">

<div className="ml-2">
<p> Features: {features}</p>
<p> location : { location}</p>
</div>
  
      </div>
   
      <p>Availability: {Availability}</p>
   
      
      <p> Price: {Rental_Price} $</p>

    <p> Description:  {description}</p>

    <div className="mt-3">
    <div className="">
        <img src={user?.photoUR} alt="" />
      </div>
      <h1 className='text-xl font-bold'>Owener Details</h1>
      <p>Name: {user?.
displayName}</p>
      <p>Email:  {user?.email} </p>
      <p>Publish Date: {deadline}</p>
    </div>
 
    <div className="card-actions ">
      <div className="badge badge-outline hover:bg-green-500 hover:text-white">
        <Link  onClick={()=>document.getElementById('my_modal_1').showModal()} to=''>
     Book Now
        </Link>
                                       
        </div>
      
    </div>
  </div>
</div>
            </div>



            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}




<form onSubmit={hanDleSubmit} >
<dialog id="my_modal_1" className="modal ">

<div className="modal-box  bg-green-900">
    <h3 className="font-bold mb-2 text-2xl"> Confirm Your Booking </h3>

   <div>
     
    
   <label className=''>Car-Model :  </label>
    <input className='py-2' type="text" name="bookModel" id="" defaultValue={Car_Model} disabled />
  <div className="w-full space-y-3">

  <div >
  <label className=''>img :   </label>
  <input className='py-2' type="text" name="bookImg" id="" defaultValue={photo}  disabled />
 <br />
  </div>

  <label className=''>location  </label>
  <input className='py-2' type="text" name="bookLocation" id="" defaultValue={location}  disabled />
 <br />
  <label className=''> Total  Price : $ </label>
  <input className='py-2' type="text" name="bookPrice" id="" defaultValue={Rental_Price}  disabled />


 

<p>Start Date:</p>


  <DatePicker 
                className='border p-2 w-full rounded-md' name='dated'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
              <br />


              <p>End Date:</p>


  <DatePicker 
                className='border p-2 w-full rounded-md' name='datedd'
                selected={endDate}
                onChange={datedd => setendDate(datedd)}
              />
              <br />
          
       

 
<button className='btn  bg-orange-900 '>Confirm</button>
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
  )
}

export default JobDetails
