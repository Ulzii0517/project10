import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState } from "react";

export const CreateModal = ({ setProducts }) => {
  const [product, setProduct] = useState({});

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      };

      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, data.product]);
      
    } catch {
      console.log("error");
    }
setProduct({
  productName: "",
  category: "",
  price: "",

});

    document.getElementById("my_modal_1").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Create product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create product</h3>
          <div className="flex flex-col gap-3 mt-4">
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.productName}
            />
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.category}
            />
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.price}
            />
          </div>
          <button className="btn mt-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
};
