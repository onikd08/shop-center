import ProductContentContainer from "@/components/ProductContentContainer";
import ProductImageContainer from "@/components/ProductImageContainer";
import { getAllProducts } from "@/utils/shop.utils";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const allProducts = await getAllProducts();
  const matchedProduct = allProducts.find(
    (product) => product.id === parseInt(id)
  );
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <ProductImageContainer images={matchedProduct.images} />
          <ProductContentContainer product={matchedProduct} />
        </div>
      </section>
    </main>
  );
}
