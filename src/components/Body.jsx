import RestaurantCard from "./RestaurantCard";
import resDatalist from "../utils/mockData";
const Body = () => {
  return (
    <div className="body-outer">
      <div className="search">search</div>
      <div className="res-container">
        {resDatalist.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resDataObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
