import { useContext, useEffect, useState } from 'react'
import {  useLoaderData, } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import MyPostCars from '../components/MyPostCars';
//import MyPostCars from '../components/MyPostCars';



const MyPostedJobs = () => {
  const jobData = useLoaderData() ;

  
const [myCars , setmyCars] = useState([])
const {user} = useContext(AuthContext) ;  
// console.log(user.email)

useEffect( () => {
  const filterEmail =[...jobData].filter( c => c.emails === user.email)
setmyCars(filterEmail)
}, [jobData , user])





  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium  text-yellow-900 '>My Posted Cars </h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
        {myCars.length} Cars
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block xl:min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span> Car Model </span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span> Price Range</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                  Availableity
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Delete 
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                     
                    </th>
                  </tr>
                </thead>
                 {
    myCars.map( mypost => <MyPostCars key={mypost._id} mypost={mypost}></MyPostCars>)
  }
               

 
           
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>




  )
}

export default MyPostedJobs
