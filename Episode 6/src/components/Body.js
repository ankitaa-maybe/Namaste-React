import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { resList } from "../utils/sampleData";

const Body = () => {
  // const [listOfRest, setListOfRest] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.944248782814103&lng=75.7428715378046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dat = await response.json();

    console.log(dat);
    setListOfRest(
      dat?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      dat?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRest.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="searchBody">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search"
          onClick={() => {
            const filteredRest = listOfRest.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRest(filteredRest);
          }}
        >
          Search Bar
        </button>

        <button
          className="filterButton"
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

      <div className="restContainer">
        {filteredRest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
