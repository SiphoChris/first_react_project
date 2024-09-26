import Loader from "./Loader.jsx";

function ProductItem({ productInfo }) {
  if (!productInfo) return <Loader />;

  return (
    <div className="card">
      <div className="card-header">
        <img
          src={productInfo.thumbnail}
          alt={productInfo.title}
          className="card-image"
        />
      </div>
      <div className="card-body">
        <div className="item-details">
          <h4 className="item-name">{productInfo.title}</h4>
          <p>Ratings: {productInfo.rating}</p>
          <h3>R {productInfo.price}</h3>
        </div>
      </div>
      <style>
        
        </style>
    </div>
  );
}

export default ProductItem;
