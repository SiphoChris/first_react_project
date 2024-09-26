import { useContext } from "react";
import { GlobalContext } from "../context";
import ProductItem from "./ProductItem";

function ProductList() {
  const { data } = useContext(GlobalContext);
  const { products } = data || [];

  return (
    <section className="product-list">
      <div className="item-wrapper">
        {products?.map((product) => (
          <ProductItem key={product.id} productInfo={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
