import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel'
import TabCategories from '../components/TabCategories'
import UpComingCars from '../components/UpComingCars';
import Question from '../components/Question';

const Home = () => {
  const jobData = useLoaderData() ;

  return (
    <div>
   <div className="">
   <Carousel />
   </div>
      <TabCategories jobData={jobData} />
      <div className="">
          <Question></Question>
        </div>
    
      <div className="mt-10">
       
        <UpComingCars></UpComingCars>
      </div>
     
    </div>
  )
}

export default Home
