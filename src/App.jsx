import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 24,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const res = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const fetchData = await res.json();

      setData(fetchData.jdList);
    })();
  }, []);

  return (
    <div className="products-container">
      {data.map((item) => (
        <Card key={item.jdUid} data={item} />
      ))}
    </div>
  );
};

export default App;
