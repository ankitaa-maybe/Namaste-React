import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import {useParams} from 'react-router-dom';

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const {resId} = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const menu = await data.json();
    console.log(menu);
    setRestInfo(menu);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restInfo === null) return <Shimmer />;

  //console.log("2. Printing restInfo: " + restInfo);
  console.log(restInfo);

  const { name, id, avgRating, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards, price } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);

  return (
    
    <div className="rest">
    
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
