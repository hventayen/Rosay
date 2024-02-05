import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section className="policy">
      
    </section>
  );
};

export default ProductDetail;
