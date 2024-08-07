import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details for Product ID: {productId}</h1>
      {/* 이곳에 제품 정보를 가져와서 렌더링합니다 */}
    </div>
  );
}

export default ProductDetail;