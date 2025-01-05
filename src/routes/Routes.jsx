import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import JobDetails from '../pages/JobDetails'
import AddJob from '../pages/AddJob'
import ErrorPage from '../pages/ErrorPage'
import MyPostedJobs from '../pages/MyPostedJobs'
import UpdateJob from '../pages/UpdateJob'
import PrivateRoute from './PrivateRoute'
import MyBids from '../pages/MyBids'
import BidRequests from '../pages/BidRequests'
import AllJobs from '../pages/AllJobs'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`https://server-ten-pink-24.vercel.app/get-car`)
      },
      {
        path: '/jobs',
        element: <AllJobs />,
        loader: () => fetch(`https://server-ten-pink-24.vercel.app/all-cars`)
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/get-car/:id',
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute> 
          ),
      loader: () => fetch(`https://server-ten-pink-24.vercel.app/get-car`)
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://server-ten-pink-24.vercel.app/get-car/${params.id}`)
      },
      {
        path: '/add-job',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-bids',
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
        loader: () => fetch(`https://server-ten-pink-24.vercel.app/get-book`)
      },
      {
        path: '/my-posted-cars',
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
        loader: () => fetch(`https://server-ten-pink-24.vercel.app/get-car`)
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
