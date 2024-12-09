export const CreateModal = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Create product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit product</h3>
          <p className="py-4">Press ESC key or c</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
