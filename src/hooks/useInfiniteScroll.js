import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../app/jobs/jobSlice";

export default function useInfiniteScroll(pageNum) {
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    const limit = 16;
    const offset = limit * pageNum;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit,
      offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setHasMore(data.totalCount > offset + limit);
        dispatch(fetchData(data.jdList));
      });
  }, [pageNum]);

  return { loading, hasMore };
}
