import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../../store/cartSlice";

const Suggestives = ({ Data, heading }) => {
  const dispatch = useDispatch();

  return (
    <div className="px-20 space-y-5">
      <h1 className="text-green-500">| {heading}</h1>
      <div className="flex justify-center">
        <ul>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {Data.map((data) => {
              return (
                <Link href={`/product/${data.Slug}`}>
                  <div className="w-full max-w-sm bg-white  rounded-lg hover:cursor-pointer border">
                    <img className="p-8 rounded-t-lg" src={data.ProductImage} alt="product image" />
                    <div className="px-5 pb-5">
                      <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{data.Title}</h5>
                      </a>
                      <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <p className="text-xl font-bold text-green-500">Rs.{data.SalePrice}</p>
                        <p className="text-gray-400 text-l pt-0 line-through">Rs.{data.Price}</p>
                        {heading === 'Related Products' ?
                          (<button
                            type="button"
                            className="min-w-[100px] px-4 py-2.5 border border-[#333]-transparent font-semibold rounded text-white bg-green-500 bg"
                            onClick={(e) => {
                              e.stopPropagation()
                              dispatch(addToCart({ ...data }))
                            }}
                          >
                            Add to cart
                          </button>) :
                          (<button
                            type="button"
                            className="min-w-[100px] px-4 py-2.5 border border-[#333]-transparent rounded text-white bg-red-500 bg"
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(removeFromCart(data.Slug))
                            }}
                          >
                            Remove From Cart
                          </button>)}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </ul>
      </div >
    </div >
  );
}
export default Suggestives;
