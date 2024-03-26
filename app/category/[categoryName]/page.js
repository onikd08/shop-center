import Banner from "@/components/Banner";
import CategorizedProducts from "@/components/CategorizedProducts";
import CategorySideBar from "@/components/CategorySideBar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { getAllProducts } from "@/utils/shop.utils";

export default async function CategoryPage({ params }) {
  const { categoryName } = params;

  const allProducts = await getAllProducts();
  const findMatchedProducts = () => {
    if (categoryName === "all") {
      return allProducts;
    } else {
      const matchedProducts = allProducts.filter(
        (product) => product.category === categoryName
      );
      return matchedProducts;
    }
  };
  return (
    <>
      <Banner />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <CategorySideBar />
          <CategorizedProducts products={findMatchedProducts()} />
        </section>
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}
