import { getDiscountedPrice } from "@/utils/shop.utils";
import Image from "next/image";
import Link from "next/link";

export default function ProductContentContainer({ product }) {
  const { title, category, description, price, discountPercentage } = product;
  const discountedPrice = getDiscountedPrice(price, discountPercentage);
  const starArray = [1, 2, 3, 4, 5];

  return (
    <div className="w-full lg:w-5/12">
      <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
        {title}
      </h1>
      <span className="text-[#919090] my-3">
        <Link href={`/category/${category}`}>{category}</Link>
      </span>
      <div className="mt-3 flex items-center justify-start gap-1">
        {starArray.map((num) => (
          <Image
            key={num}
            src={"/assets/svg/star.svg"}
            width={20}
            height={10}
            alt="rating"
          />
        ))}
      </div>
      <hr className="my-5 bg-black" />

      <div>
        <p className="my-3">
          <span className="text-rose-600 opacity-60 line-through">
            ${price}
          </span>
          <span className="font-bold text-2xl"> ${discountedPrice}</span>
        </p>
      </div>
      <div>
        <p className="leading-7">{description}</p>

        <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
          Add To Cart - ${discountedPrice}
        </button>
      </div>
    </div>
  );
}
