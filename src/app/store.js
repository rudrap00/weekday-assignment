import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";

export default configureStore({
  reducer: { jobs: jobReducer },
});
