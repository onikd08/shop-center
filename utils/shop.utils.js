import fs from "fs";

export function getAllProducts() {
  console.log(process.cwd() + "/app/products.json");
  const jsonProducts = fs.readFileSync(
    process.cwd() + "/app/products.json",
    "utf8"
  );

  const allProducts = JSON.parse(jsonProducts);
  return allProducts;
}

export function getDiscountedPrice(price, discountPercentage) {
  return (price - (discountPercentage / 100) * 100).toFixed(2);
}
