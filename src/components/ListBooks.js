import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const ListBooks = (props) => {
  const [books, setBooks] = useState(null);
  const [categories, setCategories] = useState(null);
  const [didUpdate, setDidUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3004/books")
      .then((resBook) => {
        setBooks(resBook.data);
        axios
          .get("http://localhost:3004/categories")
          .then((resCat) => {
            setCategories(resCat.data);
          })
          .catch((err) => console.log("categories err", err));
      })
      .catch((err) => console.log("books err", err));
  }, [didUpdate]);
  const deleteBook = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3004/books/${id}`)
      .then((res) => {
        setDidUpdate(!didUpdate);
      })
      .catch((err) => console.log(err));
  };
  if (books === null || categories === null) {
    return <Loading />;
  }
  return (
    <div className="container my-5">
      <div className="my-3 d-flex justify-content-end">
        <Link to="/add-book" className="btn border border-success">
          Add Book
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th className="text-center" scope="col">
              ISBN
            </th>
            <th className="text-center" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const category = categories.find(
              (cat) => cat.id === book.categoryId
            );
            return (
              <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{category.name}</td>
                <td className="text-center">
                  {book.isbn === "" ? "-" : book.isbn}
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
    </div>
  );
};

export default ListBooks;
