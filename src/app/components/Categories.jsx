import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    "Sports",
    "Bollywood",
    "National Affairs",
    "International Affairs",
    "State News",
    "Hollywood",
  ];
  const categoryButtons = categories.map((category, index) => (
    <div className="category" key={index}>
      <Link href={`http://localhost:3000/news/${category}`}><button className="Category__btn">{category}</button></Link>
    </div>
  ));
  
  return (
    <section className="flex justify-between w-full px-2 pt-[7rem] pb-[1rem] border-b-2 border-color flex-col gap-5">
        <h5 className=" opacity-70">Browse News Categories: </h5>
        <div className="flex justify-between flex-wrap">
            {categoryButtons}
        </div>
    </section>
  );
};

export default Categories;
