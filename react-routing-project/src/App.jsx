import React, { useEffect, useState } from "react";
import { getBookData } from "./service/bookUrl.service";

const App = () => {
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await getBookData("books");
      console.log(data);
      setFetch(data);
      // console.log(data);
    })();
  }, []);
  return <div>{fetch && <>{JSON.stringify(fetch)}</>}</div>;
};

export default App;
