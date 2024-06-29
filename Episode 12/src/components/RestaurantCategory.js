import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // console.log("Clicked");
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-slate-100 mx-auto my-5 p-3 shadow-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{"📩"}</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
