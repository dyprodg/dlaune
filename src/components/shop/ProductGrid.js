// ProductGrid.jsx
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
