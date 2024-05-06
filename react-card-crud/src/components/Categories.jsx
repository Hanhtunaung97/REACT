import React, { useEffect, useState } from "react";
import Container from "./Container";
import { categoriesApi } from "../api/categories";
import Category from "./category";
import LoaderCategories from "./LoaderCategories";

const Categories = () => {
  const [categories, setCategory] = useState([]);
  const [ready, setReady] = useState(false);
  const loaderCategoryArray = Array.from({ length: 4 }, (_, index) => index);
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await categoriesApi.get("/");
      setCategory(res.data);
      setReady(true);
    };
    fetchCategory();
  }, []);
  return (
    <section className="category-list mb-10 py-3">
      <Container>
        <p className="font-heading mb-2">Select Categories</p>
        <div
          id="categoryList"
          className="flex gap-3 select-none overflow-x-auto"
        >
          <Category category="ALL" />
          {!ready &&
            loaderCategoryArray.map((el, index) => (
              <LoaderCategories key={index} />
            ))}

          {ready &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
