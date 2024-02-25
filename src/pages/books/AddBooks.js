import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/layouts/AdminLayout";
import CustomInput from "../../components/custominput/CustomInput";
import { addNewBookAction } from "../../redux/books/bookAction";
import { useDispatch } from "react-redux";

function AddBooks() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();


  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Twilight",
      required: true,
    },
    {
      label: "Author Name",
      name: "author",
      type: "text",
      placeholder: "Author",
      required: true,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2022",
    },
    {
      label: "Image URL",
      name: "url",
      type: "url",
      placeholder: "https://...",
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      rows: "4",
      placeholder: "https://...",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewBookAction(formData));

  };

  return (
    <AdminLayout>
      <h3>Add Books</h3>
      <hr />
      <Link to="/books">
        <Button type="submit" variant="dark">
          Go Back
        </Button>
      </Link>
      <div className="p-4 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input, i) => {
            return <CustomInput key={i} {...input} onChange={handleOnChange} />;
          })}
          <div className="d-flex justify-content-center align-items-center ">
            <Button type="submit" variant="dark">
              Add Book
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
}

export default AddBooks;
