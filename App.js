import React from "react";
import ReactDOM from "react-dom";

//1. HeaderComponent
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img
          id="logo-img"
          src="https://maayaofbath.co.uk/wp-content/uploads/2022/02/maya-logo.svg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Buffet Menu</li>
          <li>Festive Menu</li>
          <li>Book Table</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


//3. RestaurantCardComponent
// const RestaurantCardComponent = (props)=>{
//     const { restData } = props;
//     console.log("props-----",props);
//     console.log("name----restData----",restData[0]);
//     // console.log("avgRating--------",restData.info.avgRating);
//     // console.log("deliveryTime--------",restData.info.sla.deliveryTime);
//     return <>
//         <div className="rest-cards">
//             <img className="rest-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
//             + restData.info.cloudinaryImageId}></img>
//             <h2> {restData.info.name}</h2>
//             <h5 id="header4">{restData.info.cuisines.join(",")}</h5>
//             <h4 id="header4">{restData.info.avgRating} stars</h4>
//             <h4 id="header4">{restData.info.sla.deliveryTime}</h4>
//         </div>
//     </>
// }

//3.1 Destructuring an Array while reading a data
const RestaurantCardComponent = (props)=>{
    const { restData } = props;
    // console.log("name----restData----",restData[0]);
    // console.log("avgRating--------",restData.info.avgRating);
    // console.log("deliveryTime--------",restData.info.sla.deliveryTime);
    const { cloudinaryImageId, name, cuisines, avgRating } = restData?.info;
    const { deliveryTime } = restData?.info.sla;
    return <>
        <div className="rest-cards">
            <img className="rest-card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            + cloudinaryImageId}></img>
            <h2> {name}</h2>
            <h5 id="header4">{cuisines.join(",")}</h5>
            <h4 id="header4">{avgRating} stars</h4>
            <h4 id="header4">{deliveryTime}</h4>
        </div>
    </>
}

// Restaurant data
const restListData =  [
   //dummy data
  ]

//2. BodyComponent
const BodyComponent = ()=>{
    return <>
    <div className="search-bar">
    <h1>SEARCH</h1>
    </div>
    <div className="rest-container">
    {/* use Array.map() to iterate list */}
    {
        restListData.map((restaurant)=>(
            <RestaurantCardComponent key={restaurant.info.id} restData={restaurant} />
                )) 
    }
       </div>
    </>
}


const MainComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
