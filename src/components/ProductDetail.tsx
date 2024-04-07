import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../store/cartSlice";

const ProductDetail = ({ productData }) => {
  const dispatch = useDispatch();

  return (
    <div className="mx-20 space-y-5">
      <h1 className="text-green-500">| Product</h1>
      <div className="">
        <div className="font-[sans-serif] bg-white w-full">
          <div className="">
            <div className="lg:flex lg:justify-between gap-10 space-y-5">
              <div className=" lg:col-span-2 lg:sticky top-0 text-center w-3/5">
                <div className=" px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                  <img src={productData.ProductImage} alt="Product" className="w-3/5 rounded object-cover" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-[#333]">{productData.Title}</h2>
                <span>Brand : <a className="text-blue-400 underline">{productData.Brand}</a></span>
                <div className="flex justify-end flex-wrap gap-4 mt-6">
                  <p className="text-[#333]">Rs.{productData.Price}</p>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="option1" name="radio-group" value="option1" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-4 w-4 rounded-full border-gray-300 "></input>
                  <label htmlFor="option1" className="ml-3 text-sm font-medium text-gray-700">Per Strip</label>
                </div>
                <div className="flex flex-wrap gap-4 mt-10 justify-center">
                  <button type="button" disabled className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent text-[#333] text-sm font-bold rounded">Expected time 1 hour | Quick Delivery</button>
                  <button type="button" className="min-w-[100px] px-4 py-2.5 border border-[#333]-transparent font-semibold rounded text-white bg-green-500 bg"  onClick={()=>dispatch(addToCart({...productData}))}>Add to cart</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
