import React from "react";
import styles from "./FilterBar.module.scss";
import SelectControl from "./Select/SelectControl";
import filters from "./constants";

const FilterBar = () => {
  return (
    <div className={styles.container}>
      {filters.map((item) => {
        return <SelectControl key={item.id} data={item} />;
      })}
    </div>
  );
};

export default FilterBar;
