

export const EditModal = ({
  selectedProduct,
  handleSubmit,
  handleInputChange,
  setSelectedProduct,
  product,
}) => {

  const handleModalClick = () => {
    document.getElementById("my_modal_2").showModal()
    setSelectedProduct(product);
  }
  return (
    <>
      <div>
        <button
          className="btn"
          onClick={handleModalClick}
        >
          Edit
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit product</h3>
            <div className="flex flex-col gap-3 mt-4">
              <input
                name="productName"
                onChange={handleInputChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={selectedProduct?.productName}
              />
              <input
                name="category"
                onChange={handleInputChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={selectedProduct?.category}
              />
              <input
                name="price"
                onChange={handleInputChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={selectedProduct?.price}
              />
            </div>
            <button className="btn mt-4" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
};
