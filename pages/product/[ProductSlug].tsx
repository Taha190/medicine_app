import { fetchUrl, suggestiveUrl } from '../../src/utils';
import ProductDetail from '../../src/components/ProductDetail';
import Suggestives from '../../src/components/Suggestives';
import Link from 'next/link';

export async function getServerSideProps({ params }) {
  const { ProductSlug } = params;
  const [productResponse, suggestiveResponse] = await Promise.all([fetch(fetchUrl(ProductSlug)), fetch(suggestiveUrl)])
  const [productData, suggestiveData] = await Promise.all([productResponse.json(), suggestiveResponse.json()])
  if (!productData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { productData: productData.Data[0], suggestiveData: suggestiveData.Data },
  };
}

interface MyComponentProps {
  productData: any;
  suggestiveData: any;
}

const Product: React.FC<MyComponentProps> = ({ productData, suggestiveData }) => {
  return (
    <div className='space-y-10'>
      <ProductDetail productData={productData} />
      <Suggestives Data={suggestiveData} heading='Related Products'/>
    </div>
  );
};
export default Product;