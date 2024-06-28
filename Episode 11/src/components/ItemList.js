import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex border-b-2">
          <div className="p-3 text-left w-9/12 text-xl">
            <div>
              <div>{item?.card?.info?.name}</div>
              <div> ₹ {item?.card?.info?.price / 100}</div>
            </div>

            <p>{item?.card?.info?.description}</p>
          </div>

          <div className="flex flex-col w-3/12 p-1 items-center">
            <img
              className="rounded"
              src={IMG_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button className=" border-b-2 px-4 bg-red-400 text-white rounded py-1 text-lg w-6/12 ">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
