import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/hepers";

function CartOverview() {
  const totalCartQty = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQty) return null;

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-6 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 sm:space-x-6 font-semibold space-x-4">
        <span>{totalCartQty} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
