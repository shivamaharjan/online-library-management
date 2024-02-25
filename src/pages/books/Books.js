import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookTable from "../../components/book/BookTable";

function Books() {
  return (
    <AdminLayout>
      <h3>Books</h3>
      <hr />
      <div>
        <Link to="/add-books">
          <Button type="submit" variant="dark">
            Add Books
          </Button>
        </Link>
      </div>
      <BookTable />
    </AdminLayout>
  );
}

export default Books;
