import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../app/jobs/jobSlice";

export default function useInfiniteScroll(pageNum, filter) {
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    (async () => {
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

      const res = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await res.json();

      setLoading(false);
      dispatch(fetchData(data.jdList));
      setHasMore(data.totalCount > offset + limit);
    })();
  }, [pageNum, filter]);

  return { loading, hasMore, setHasMore };
}
