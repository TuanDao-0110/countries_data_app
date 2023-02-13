import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { checkLiked, getAllCountries } from "../service/CountriesService";
import { CountryType } from "../features/CountriesSlicer";
import { RenderCard } from "../service/RenderService";

export const Countries = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");
  const [load, setLoad] = useState<number>(15);
  const { countries, status } = useSelector((state: RootState) => state.contries);
  const { favoriteCountries } = useSelector((state: RootState) => state.favorite);
  const handldeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleLoadMore = () => {
    setLoad((prev) => prev + 15);
  };

  const createContent = (arr: CountryType[]) => {
    return arr
      ?.filter((i) => i.name.official.toLowerCase().includes(search.toLowerCase()))
      .slice(0, load)
      .map((country, index) => {
        return RenderCard(country, index, checkLiked(country.name.common, favoriteCountries));
      });
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const renderData = () => {
    let content: ReactElement[] | ReactElement;
    if (status === "pending") {
      content = <div>loading...</div>;
    } else {
      content = createContent(countries);
    }
    return content;
  };
  return (
    <div className="relative">
      <div className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none lg:py-2">
            <div className="flex justify-center">
              <input
                // value={search}
                className="shadow appearance-none border rounded w-2/5 my-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Find Countries By Name"
                onChange={handldeSearch}
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 text-center">Country's List</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-5">{renderData()}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
