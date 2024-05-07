import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card/Card";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const App = () => {
  const [pageNum, setPageNum] = useState(0);
  const { data } = useSelector((state) => state.jobs);
  const { loading, hasMore } = useInfiniteScroll(pageNum);

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
    <div className="products-container">
      {data.map((item, index) => {
        if (index + 1 === data.length)
          return <Card ref={lastElementRef} key={item.jdUid} data={item} />;
        return <Card key={item.jdUid} data={item} />;
      })}
    </div>
  );
};

export default App;
