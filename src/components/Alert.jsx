import useAlert from "../hooks/useAlert";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function Alert() {
  const { alertInfo } = useContext(EcomContext);

  return (
    <div>
      {alertInfo.show && (
        <div
          className={`${
            alertInfo.type === "success" ? "bg-green-600" : "bg-red-600"
          } w-[30%] m-auto left-0 right-0 text-center py-[10px] text-white fixed top-[60px] z-[40] rounded`}
        >
          {alertInfo.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
