import CustomLink from "./CustomLink";

export default function CategorySideBar() {
  const categories = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
  ];
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      {categories.map((category, idx) => (
        <button
          key={idx}
          className="hover:border-b border-black block h-6 box-border mt-4"
        >
          <CustomLink path={`/category/${category}`}>{category}</CustomLink>
        </button>
      ))}
    </div>
  );
}
