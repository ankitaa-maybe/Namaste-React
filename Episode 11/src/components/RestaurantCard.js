import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;

  return (
    <div className="text-xl m-6 p-3 border border-black bg-orange-100 flex flex-col justify-center w-96 hover:bg-orange-200">
      <img className="rounded-md" src={IMG_URL + cloudinaryImageId} />
      <h3 className="font-bold p-2">{name}</h3>
      <h4>Cuisine: {cuisines.join(", ")}</h4>
      <p>{avgRating} Stars</p>
      <p>{areaName}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export const VegRestCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400  m-2 p-2 rounded">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
