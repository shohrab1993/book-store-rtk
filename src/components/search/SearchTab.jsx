import { useDispatch, useSelector } from "react-redux";
import { filtered } from "../../feature/filter/filterSlice";

const SearchTab = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filter);

  const handelFilter = (filters) => {
    dispatch(filtered(filters));
  };
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`${filters === "all" && "active-filter"} lws-filter-btn  `}
        onClick={() => handelFilter("all")}
      >
        All
      </button>
      <button
        className={`${
          filters === "feature" && "active-filter"
        } lws-filter-btn `}
        onClick={() => handelFilter("feature")}
      >
        Featured
      </button>
    </div>
  );
};

export default SearchTab;
