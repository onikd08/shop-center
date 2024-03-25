import { promises as fs } from "fs";
import ProductCard from "./ProductCard";

export default async function AllProducts() {
  const jsonProducts = await fs.readFile(
    process.cwd() + "/public/products.json",
    "utf8"
  );
  const allProducts = JSON.parse(jsonProducts);
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
