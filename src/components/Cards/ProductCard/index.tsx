import { Product } from "../../../services/store/store";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { title, price } = product;
  return (
    <>
      <div>
        <img src="" alt="" />

        <h1>{title}</h1>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
