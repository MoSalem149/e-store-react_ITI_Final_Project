const categories = ["Men", "Women", "Kids", "Baby"];

// Function to create a product object
const createProduct = (id, name, price, rating, category, description) => ({
  id,
  name,
  imageSrc: require(`../../../public/assets/images/shop/shop-${id}.jpg`),
  price,
  rating,
  category,
  description, // Add description field
  readMoreLink: `/product/${id}`, // Add a link to read more about the product
});

const products = [];

for (let id = 1; id <= 24; id++) {
  const categoryIndex = id % categories.length;
  const category = categories[categoryIndex];
  products.push(
    createProduct(
      id,
      "Product Name",
      100.0 + id,
      Math.floor(Math.random() * 5) + 1,
      category,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla pretium felis, at tristique mi consequat vel." // Add a sample description
    )
  );
}

export { products }; // Export products as a named export
