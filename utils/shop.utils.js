import { promises as fs } from "fs";

export async function getAllProducts() {
  const jsonProducts = await fs.readFile(
    process.cwd() + "/public/products.json",
    "utf8"
  );

  const allProducts = JSON.parse(jsonProducts);
  return allProducts;
}

export function getDiscountedPrice(price, discountPercentage) {
  return (price - (discountPercentage / 100) * 100).toFixed(2);
}
