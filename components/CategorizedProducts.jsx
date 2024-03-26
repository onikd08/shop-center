import ProductCard from "./ProductCard";

export default function CategorizedProducts({ products }) {
  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category</p>
      )}
    </div>
  );
}
