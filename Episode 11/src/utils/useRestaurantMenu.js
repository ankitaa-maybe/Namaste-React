import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    console.log(json);

    setRestInfo(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restInfo;
};

export default useRestaurantMenu;
