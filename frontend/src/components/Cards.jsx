import React from "react";

function Cards({ item }) {
  return (
    <div className="my-3">
      <div className="card bg-base-100 shadow-md hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="flex justify-center items-center px-4 pt-4">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-lg object-contain"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between mt-3">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
