function Dinner(probs) {
    // we recive the probe contain name of item (baryani , kharahi)
    return (
        <div>

     {/* <h1>Today we a serving chicken baryani</h1>

     <h1>Today we a serving chicken karhai as well</h1> */}


    <h1>Today we a serving {probs.dishName}</h1>
    <h1>Today we are serving sweet {probs.sweetDish}</h1>
     {/* ab yaha per jo bhi lekha ga wo sare componets pe update ho jae ga */}
        </div>

  
    );
  }
  
  export default Dinner;