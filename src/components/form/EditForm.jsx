import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateBookMutation } from "../../feature/api/apiSlice";
import TextBox from "../ui/TextBox";

const EditForm = ({ book }) => {
  const {
    _id: id,
    name: iniName,
    author: iniAuthor,
    thumbnail: iniThumbnail,
    price: iniPrice,
    rating: iniRating,
    featured: iniFeatured,
  } = book;
  const [name, setName] = useState(iniName);
  const [author, setAuthoe] = useState(iniAuthor);
  const [thumbnail, setThumbnail] = useState(iniThumbnail);
  const [price, setPrice] = useState(iniPrice);
  const [rating, setRating] = useState(iniRating);
  const [featured, setFeatured] = useState(iniFeatured);
  const navigate = useNavigate();

  const [updateBook, { isError, isLoading, isSuccess }] =
    useUpdateBookMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      },
    });
  };
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <TextBox
        label="Book Name"
        required
        className="text-input"
        type="text"
        id="lws-bookName"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextBox
        label="Author"
        required
        className="text-input"
        type="text"
        id="lws-author"
        name="author"
        value={author}
        onChange={(e) => setAuthoe(e.target.value)}
      />

      <TextBox
        label="Image Url"
        required
        className="text-input"
        type="text"
        id="lws-thumbnail"
        name="thumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-8 pb-4">
        <TextBox
          label="Price"
          required
          className="text-input"
          type="number"
          id="lws-price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <TextBox
          label="Rating"
          required
          className="text-input"
          type="number"
          id="lws-rating"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button
        type="submit"
        className="submit"
        id="lws-submit"
        disabled={isLoading}
      >
        Update Book
      </button>
      {!isLoading && isError && <div>there is an error!</div>}
    </form>
  );
};

export default EditForm;
