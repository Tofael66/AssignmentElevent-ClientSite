import { useContext } from 'react'
import logos from  '../assets/images/images (14).jpg'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)


 /****
  * some setion done 
  * some setion done 
  * some setion done 
  * some setion done 
  * some setion done 
  * some setion done 
  * some setion done 
  * 
  *  */ 
 








  return (
    <div className='navbar bg-yellow-900 shadow-sm container px-4 mx-auto  '>
      <div className='flex-1 '>
        <Link to='/' className='flex gap-2 items-center'>
          <img  className='w-auto rounded-full h-7' src={logos} alt='' />
          <span className='font-bold'>Our Car Rental</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          
          <li>
            <Link to='/jobs'>Available Cars</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/add-job' className='justify-between'>
                Add Car
                </Link>
              </li>
              <li>
                <Link to='/my-posted-cars'>My Cars </Link>
              </li>
              <li>
                <Link to='/my-bids'> My Bookings</Link>
              </li>
              <li>
                <Link to='/bid-requests'></Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-100 block text-green-800 text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
