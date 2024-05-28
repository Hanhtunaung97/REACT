import React from "react";
import useFetch from "../hook/useFetch";
import { getBookData } from "../service/bookUrl.service";
import { BookListComponents } from "../components";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, error, data } = useFetch(getBookData, "books");
  return (
    <div className=" my-3">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-between gap-y-3">
          {data.map((el) => (
            <Link key={el.id} to={`/detail/${el.id}`}>
              <BookListComponents data={el} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
