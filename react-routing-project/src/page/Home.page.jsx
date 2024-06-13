import React, { useContext } from "react";
import { BookListComponents } from "../components";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { apiContext } from "../store/ApiContextProvider";

const HomePage = () => {
  const {data,error,loading}=useContext(apiContext)
  return (
    <div className=" my-3">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-between gap-y-3">
          {data.map((el) => (
            <Link key={el.id} to={`/detail/${el.slug}`}>
              <BookListComponents data={el} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
