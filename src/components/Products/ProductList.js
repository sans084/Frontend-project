import React, { useState } from "react";
import "./Products.css";

const productsData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (index + 1) * 100,
  category: `Category ${(index % 5) + 1}`,
  stock: 10 + index,
  status: index % 2 === 0 ? "Active" : "Inactive",
}));

function ProductList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);

  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "All" || product.status === status)
    );
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="container">
      <h2>Product Catalog</h2>

      <input
        type="text"
        placeholder="Search by product name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          setPage(1);
        }}
      >
        <option>All</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <table border="1" cellPadding="8" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹ {product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <span 
                  className={`status-badge ${
                    product.status === "Active"
                      ? "status-active"
                      : "status-inactive"
                  }`}
                >
                  {product.status}
                </span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "15px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            style={{
              marginRight: "5px",
              fontWeight: page === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
