import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resDataObj } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime,
    costForTwo,
    locality,
  } = resDataObj;

  return (
    <div className="card-border">
      <div className="res-card">
        <div>
          <img
            alt="Restaurant"
            className="res-logo"
            src={RES_IMG_URL + cloudinaryImageId}
          />
        </div>
      </div>
      <div className="res-info">
        <label> {name}</label>
        <label> {cuisines}</label>
        <label> $ {costForTwo / 100} </label>
        <label> {locality}</label>
        <label> {avgRating}</label>
        <label> {deliveryTime} minutus</label>
      </div>
    </div>
  );
};

export default RestaurantCard;
