/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import JobCard from './JobCard'

const TabCategories = ({jobData}) => {
  // console.log(jobData)
  return (
    <Tabs>
      <div className=' container px-6 py-10 mx-auto'>
        <h1 className='text-2xl  font-semibold text-center  capitalize lg:text-3xl '>
        Available Features By Cars
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
        Some of the best car features include adaptive cruise control, 360-view cameras, and automatic parking assist, enhancing both safety and convenience. Q. What .
        </p>
        <div className='flex items-center justify-center'>
          <TabList>
            <Tab>Toyata (GPS)</Tab>
            <Tab>BMW (Ac) </Tab>
            <Tab>Ford (E.g)</Tab> 
          </TabList>
        </div>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {jobData?.filter(job => job.features
            === 'GPS' ).map(job => <JobCard key={job._id} job={job}> </JobCard> )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {jobData?.filter(job => job.features === 'AC' ).map(job => <JobCard key={job._id} job={job}> </JobCard> )}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {jobData?.filter(job => job.features === 'e.g' ).map(job => <JobCard key={job._id} job={job}> </JobCard> )}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default TabCategories
