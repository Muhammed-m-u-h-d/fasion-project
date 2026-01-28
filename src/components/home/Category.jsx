import React from 'react';

function Category() {
  const items = ["Shirt", "T-shirt", "Hoodies", "Pants", "Jacket"];

  return (
    <div className="flex gap-3 p-4 sansation-light overflow-x-auto whitespace-nowrap [scrollbar-width:none] border-b border-gray-300">
      {items.map((item, index) => (
        <button
          key={index}
          className="bg-gray-200 p-2 w-28 rounded-xl text-lg font-medium shrink-0 hover:bg-gray-400 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Category;
