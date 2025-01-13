import React from "react";

const Filter = ({ categories, onCategorySelect, onSearch }) => {
  return (
    <div className="mb-4 d-flex justify-content-between">
      <select
        className="form-select w-25"
        onChange={(e) => onCategorySelect(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;
