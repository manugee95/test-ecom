import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cartItems, updateQuantity, calculateTotalAmount, removeFromCart } =
    useContext(EcomContext);
  const cartTable = (
    <>
      <table className="w-[90%] h-[30vh] mx-auto">
        <thead>
          <th>Action</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </thead>
        <tbody className="text-center">
          {cartItems.map((item) => (
            <tr className="border-b-2">
              <td>
                <div className="flex justify-center">
                  <MdDelete onClick={()=> removeFromCart(item.id)} className="text-2xl text-orange-500 cursor-pointer" />
                </div>
              </td>
              <td>{item.name}</td>
              <td>
                <div className="flex justify-center">
                  <img src={item.img} className="h-[50px]" alt="" />
                </div>
              </td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  className="outline outline-1"
                  min="1"
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 w-[90%] mx-auto">
        <h1 className="text-4xl font-bold">Total: ₦{calculateTotalAmount()}</h1>
      </div>
    </>
  );

  return (
    <div className="m-[5%]">
      <h1 className="mb-10 text-3xl font-bold text-center">Your Shop Cart</h1>
      {cartItems.length > 0 ? (
        cartTable
      ) : (
        <h1 className="font-bold text-center mt-10">No Items in Cart</h1>
      )}
    </div>
  );
}

export default Cart;
