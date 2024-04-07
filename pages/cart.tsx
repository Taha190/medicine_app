import { useSelector, useDispatch } from 'react-redux';
import Suggestives from "../src/components/Suggestives";


const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="my-10">
      <Suggestives Data={cart} heading='Cart'/>
    </div>
  );
}
export default Cart;
