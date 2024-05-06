import React, { useContext, useEffect, useRef, useState } from "react";
import RatingStar from "./RatingStar";
import { dataContext } from "../contexts/DataContext";
import AnimateImage from "./AnimateImage";

const Product = ({
  product: {
    id,
    title,
    price,
    description,
    image,
    category,
    rating: { rate, count },
  },
}) => {
  const { addCarts } = useContext(dataContext);
  const [added, setAdded] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleAddCartBtn = () => {
    if (!added) {
      const newCart = {
        product_id: id,
        title,
        price,
        image,
        quantity: 1,
        cost: price,
      };
      addCarts(newCart);
      setAdded(true);
      setAnimate(true);
    }
  };
  const imgRef = useRef();
  const [info, setInfo] = useState({});
  useEffect(() => {
    setInfo(imgRef.current.getBoundingClientRect());
  }, []);
  return (
    <div className="product-card group">
      <img
        ref={imgRef}
        className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
        src={image}
      />
      {animate && (
        <AnimateImage src={image} info={info} setAnimate={setAnimate} />
      )}
      <div className="product-card-body border border-neutral-600 p-5">
        <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            <RatingStar rate={rate} />
          </div>
          <p className="rating-text">
            ({rate} / {count})
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button
          disabled={added}
          onClick={handleAddCartBtn}
          className={`add-to-cart disabled:pointer-events-none duration-100 active:scale-90 border border-neutral-600 block w-full h-12 font-heading select-none ${
            added && "bg-neutral-600 text-white"
          }`}
        >
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
