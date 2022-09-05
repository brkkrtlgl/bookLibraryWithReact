import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const AddBookForm = (props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const [bookName, setbookName] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookName === "" || author === "" || category === "") {
      alert("book title, author and category are required fields.");
    }
    const newBook = {
      id: new Date().getTime(),
      name: bookName,
      author: author,
      isbn: isbn,
      categoryId: category,
    };
    axios
      .post("http://localhost:3004/books", newBook)
      .then((res) => {
        setbookName("");
        setAuthor("");
        setIsbn("");
        setCategory("");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  if (categories === null) {
    return <Loading />;
  }

  return (
    <div className="container mt-5 ">
      <p className="text-center fw-bold mb-5">
        Please fill in the boxes with the information of the book.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Book Name"
              value={bookName}
              onChange={(event) => setbookName(event.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="ISBN"
              value={isbn}
              onChange={(event) => setIsbn(event.target.value)}
            />
          </div>

          <div className="col">
            <select
              className="form-select"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value={""} selected>
                {" "}
                Select Category{" "}
              </option>

              {categories.map((cat) => {
                return <option value={cat.id}>{cat.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <button type="submit" className="btn border border-danger w-50 ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
