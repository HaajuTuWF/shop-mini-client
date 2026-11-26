export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "Áo thun basic", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OBSNI5JFhFLqMN1MRad-UteY0D7i0cTbMiO4gSbVBQ&s=10", category: "Thời trang", stock: 12 },
  { id: 2, name: "Quần jean slim", price: 420000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rv4ks0XdOBh7zhDr6j5CU4uu9ssZVBTJJu84Rk5dGw&s", category: "Thời trang", stock: 5 },
  { id: 3, name: "Tai nghe Bluetooth", price: 690000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdMhMAT6Dbo9fAw8ycCCxdQ34j68p_IKpBiTEz20NIA&s=10", category: "Điện tử", stock: 0 },
  { id: 4, name: "Bình giữ nhiệt 500ml", price: 185000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3wB79UXR5ETJXd_Q3Z-n4tpQQOkgu8Ef5-OMMax_Ww&s=10", category: "Gia dụng", stock: 20 },
  { id: 5, name: "Balo laptop 15 inch", price: 550000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXIbLHP29Ab0TQKXEK81NCKeRA8ukp3O2OuPw_NTOGw&s=10", category: "Phụ kiện", stock: 8 },
  { id: 6, name: "Chuột không dây", price: 245000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgru12G1KMmgSJv99W_EqXw_LSbZANeHmkzpGksQmVg&s=10", category: "Điện tử", stock: 15 },
];
export function searchByPriceRange(
  products: Product[],
  min: number,
  max: number
): Product[] {
  return products.filter((p) => p.price >= min && p.price <= max);
}

export function groupByCategory(products: Product[]): Record<string, number> {
  return products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
}