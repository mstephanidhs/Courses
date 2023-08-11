import { useParams } from "react-router-dom";

function ProductDetailPage() {
  // contains every dynamic path segments that are in the URL path
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productID}</p>
      <p>
        <Link to="..">Back</Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
