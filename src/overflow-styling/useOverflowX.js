import { useEffect } from "react";
import "../index.css";
const useOverflowX = () => {
  useEffect(() => {
    document.body.classList.add("overflow-scroll");
    return () => {
      document.body.classList.remove("overflow-scroll");
    };
  }, []);
};

export default useOverflowX;
