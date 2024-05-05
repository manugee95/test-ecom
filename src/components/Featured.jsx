import { TERipple } from "tw-elements-react";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import { Link } from "react-router-dom";

function Featured() {
  const { featured, addToCart, cartItems, product } = useContext(EcomContext);

  console.log(cartItems);

  return (
    <div className="mx-10 py-[30px]">
      <h1 className="pb-[10px] font-bold text-orange-500 text-xl">
        Featured Products
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:flex-wrap gap-3">
        {featured.map((item) => (
          <div
            key={item.id}
            className="w-[280px] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <TERipple>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img className="rounded-t-lg h-[200px]" src={item.img} alt="" />
                <Link to={`/detail/${item.id}`}>
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </Link>
              </div>
            </TERipple>
            <div className="p-6 text-center">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {item.name}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                ₦{item.price}
              </p>
              <TERipple>
                <button
                  type="button"
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                  className="inline-block rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Add to cart
                </button>
              </TERipple>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
