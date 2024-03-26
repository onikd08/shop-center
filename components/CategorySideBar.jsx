import CustomLink from "./CustomLink";

export default function CategorySideBar() {
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button className="hover:border-b border-black block h-6 box-border mt-4">
        <CustomLink path="/category/allProducts">All</CustomLink>
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        <CustomLink path="/category/smartphones">Smartphones</CustomLink>
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        <CustomLink path="/category/laptops">Laptops</CustomLink>
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        <CustomLink path="/category/fragrances">Fragrances</CustomLink>
      </button>
    </div>
  );
}
