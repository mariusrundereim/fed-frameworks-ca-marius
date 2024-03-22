import { useStore } from "../../../services/store/store";
import { Product } from "../../../services/store/store";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { title, price } = product;
  const addProductToCart = useStore((state) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart(product.id, 1);
  };

  return (
    <>
      <div>
        <img src="" alt="" />

        <h1>{title}</h1>
        <p>{price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
