import { createContext, useState, useEffect } from "react";
import fetchData from "../utils";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [data, setData] = useState(null );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchData('https://dummyjson.com/products');
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <GlobalContext.Provider value={{ data }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
