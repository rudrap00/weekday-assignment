import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card/Card";
import FilterBar from "./components/Filter/FilterBar";
import Loading from "./components/Loading/Loading";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const App = () => {
  const [pageNum, setPageNum] = useState(0);
  const { data, filter } = useSelector((state) => state.jobs);
  const { loading, hasMore } = useInfiniteScroll(pageNum, filter);

  useEffect(() => {
    setPageNum(0);
  }, [filter]);

  useEffect(() => {
    console.log(loading, hasMore, data.length, pageNum);
    if (!loading && hasMore && data.length === 0) {
      setPageNum((page) => page + 1);
    }
  }, [loading]);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore)
          setPageNum((prevPage) => prevPage + 1);
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="App">
      <FilterBar />
      <div className="products-container">
        {data.map((item, index) => {
          if (index + 1 === data.length)
            return <Card ref={lastElementRef} key={item.jdUid} data={item} />;
          return <Card key={item.jdUid} data={item} />;
        })}
        {(loading || hasMore) && <Loading />}
        {!hasMore && data.length === 0 && pageNum > 1 && (
          <div>No jobs found</div>
        )}
      </div>
    </div>
  );
};

export default App;
