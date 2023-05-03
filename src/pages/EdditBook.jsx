import { useParams } from "react-router-dom";
import EditForm from "../components/form/EditForm";
import { useGetSingleBookQuery } from "../feature/api/apiSlice";

const EdditBook = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>there is an error!</div>;
  if (!isLoading && !isError && !data.books?._id)
    content = <div>video not found!</div>;
  if (!isLoading && !isError && data.books?._id) {
    content = <EditForm book={data.books} />;
  }

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default EdditBook;
