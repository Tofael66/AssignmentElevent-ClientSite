



const ComingCard = ({car}) => {
//console.log(car)
const {availability
    , dailyPrice , model , carImage , carImages } = car ;
    
    return (
        <div className="rounded-md shadow-md hover:scale-[1.02] transition-all">
  <div className="card text-white bg-black hover:bg-neutral shadow-xl">
  <figure className="h-36">
  
    <img className=' h-full w-full' src={carImage} alt="" />
 
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {model}
      
    </h2>
    <h3>Price per day:  {dailyPrice } $</h3>
    <p>vaa: {availability}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline hover:bg-green-500 hover:font-bold ">Book Now</div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default ComingCard;