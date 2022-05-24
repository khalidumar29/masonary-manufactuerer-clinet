import React from "react";
import ToolPart from "./ToolPart/ToolPart";
import useAllProducts from "../../../Hooks/useAllProducts/useAllProducts";
const ToolsParts = () => {
  const [allProducts] = useAllProducts();
  return (
    <div className='py-5'>
      <h1 className='text-center text-3xl capitalize'>
        <span className='text-orange-500'>tools</span>{" "}
        <span className='text-slate-800'>/</span>
        <span className='text-purple-500'> parts</span>
      </h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
        {allProducts.map((product) => (
          <ToolPart key={product._id} product={product}></ToolPart>
        ))}
      </div>
    </div>
  );
};

export default ToolsParts;
