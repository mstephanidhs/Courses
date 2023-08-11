function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Generating / Regenerating ProductList");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    // revalidate this product list every 10 seconds
    // so in case of reloading the new content will be displayed
    revalidate: 30,
  };
}
