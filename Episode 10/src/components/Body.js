import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.944248782814103&lng=75.7428715378046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dat = await response.json();

    console.log(dat);
    setListOfRest(
      dat?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRest(
      dat?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) return "No Internet Connection";

  if (listOfRest.length === 0) return <Shimmer />;

  return (
    <div className=" bg-slate-50">
      <div className="flex flex-col">
        <div className="m-3">
          <input
            type="text"
            className="h-8 border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="m-2 rounded-md bg-green-200 green-200 px-3 py-1 text-xl"
            onClick={() => {
              const filteredRest = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="mx-2 rounded-lg bg-blue-100 green-200 px-3 py-1 w-64 text-xl"
          onClick={() => {
            const filterList = listOfRest.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRest(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap m-5 p-2 ">
        {filteredRest.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
