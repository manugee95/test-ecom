import { useContext } from "react";
import { useParams } from "react-router-dom";
import EcomContext from "../context/EcomContext";

function Detail() {
  const params = useParams();
  const car = params.id;
  const { product, addToCart } = useContext(EcomContext);
  const caritem = product.find((item) => parseInt(item.id) === parseInt(car));
  [];
  console.log(product);

  if (!caritem) {
    return <div>loading.....</div>;
  }

  return (
    <div className="flex justify-between m-[5%]">
      <div className="w-[50%]">
        <img src={caritem?.img} alt="" />
      </div>
      <div className="w-[50%]">
        <h1 className="text-2xl font-bold mb-[2%] border-b-2">
          {caritem?.name}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          doloremque consequuntur, soluta commodi veritatis laudantium libero
          dignissimos modi facilis molestias.
        </p>
        <p className="text-xl font-bold mt-[2%]">{caritem?.price}</p>
        <button
          onClick={() => addToCart(caritem)}
          className="bg-orange-500 p-[10px] rounded-md mt-[3%]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Detail;
