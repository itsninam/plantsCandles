const ModalWindow = ({ setIsModalOpen }) => {
  return (
    <div className="modalWindowContainer" onClick={() => setIsModalOpen(false)}>
      <div className="wrapper" onClick={() => setIsModalOpen(true)}>
        <div className="alertCard">
          <h2>Thanks for your oder!</h2>
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
