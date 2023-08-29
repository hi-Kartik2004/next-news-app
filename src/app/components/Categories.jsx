import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    "Chandrayaan",
    "Indian",
    "International",
    "Bengaluru",
    "Bollywood",
    "Hollywood",
    "Sports",
  ];

  const base_url = process.env.BASE_URL;

  const categoryButtons = categories.map((category, index) => (
    <div className="category border-full-color shadow-lg shadow-gray-500/20 shadow-x-0 shadow-y-0" key={index}>
      <Link href={`${base_url}/news/${category}`}><button className="Category__btn ">{category}</button></Link>
    </div>
  ));
  
  return (
    <section className="flex justify-between w-full px-5 pt-[7rem] pb-[1rem] border-b-2 border-color flex-col gap-5">
        <h5 className=" opacity-80 font-bold">Browse News Categories</h5>
        <div className="flex justify-between flex-wrap gap-2">
            {categoryButtons}
        </div>
    </section>
  );
};

export default Categories;
