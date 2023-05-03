import { useSelector } from "react-redux";
import Card from "../components/card/Card";
import SearchTab from "../components/search/SearchTab";
import { useGetBooksQuery } from "../feature/api/apiSlice";

const Home = () => {
  const { data: books, isError, isLoading } = useGetBooksQuery() || {};
  const { search, filters } = useSelector((state) => state.filter);

  // filter and searching book
  const filterByFeature = (book) => {
    if (filters === "feature") {
      return book.featured === true;
    } else {
      return true;
    }
    // switch (filters) {
    //   case "feature":
    //     return book.featured === true;

    //   default:
    //     return true;
    // }
  };

  const searchByName = (book) => {
    if (search) {
      return book.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  };

  // decide what to render

  let content = null;
  if (isLoading) content = <div className="text-center ml-2">Loading...</div>;
  if (!isLoading && isError) content = <div>there is an error</div>;
  if (!isLoading && !isError && books.books?.length === 0)
    content = <div>Books not found!</div>;
  if (!isLoading && !isError && books.books?.length > 0) {
    content = books.books
      .filter(filterByFeature)
      .filter(searchByName)
      .map((book) => <Card key={book._id} book={book} />);
  }
  return (
    <>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">
              Book List ( {books?.result})
            </h4>

            <SearchTab />
          </div>
          <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
