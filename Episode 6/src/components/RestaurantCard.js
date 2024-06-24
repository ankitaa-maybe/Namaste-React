import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName} = resData?.info;
  return (
    <div className="restCard">
      <img 
        className="foodImage" 
        src={IMG_URL + cloudinaryImageId} 
      />
      <h3>{name}</h3>
      <h4>Cuisine: {cuisines.join(", ")}</h4>
      <p>{avgRating} Stars</p>
      <p>{areaName}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;