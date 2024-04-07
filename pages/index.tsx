import { fetchUrl, suggestiveUrl } from "../src/utils";
import Suggestives from "../src/components/Suggestives";
import ProductDetail from "../src/components/ProductDetail";

export async function getServerSideProps() {
  const [productResponse, suggestiveResponse] = await Promise.all([fetch(fetchUrl('panadol-500mg-tablets')), fetch(suggestiveUrl)])
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

const ProductDetails = ({ productData, suggestiveData }) => {
  return (
    <div className='space-y-10'>
      <ProductDetail productData={productData} />
      <Suggestives Data={suggestiveData} heading='Related Products' />
    </div>
  )
};
export default ProductDetails;
