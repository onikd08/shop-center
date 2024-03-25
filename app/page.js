import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Banner />
      <main>
        <AllProducts />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}
