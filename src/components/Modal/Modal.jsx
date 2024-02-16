export const Modal = ({ setIsOpen, content }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)}>
        <div>
          <h5>{content}</h5>
        </div>
        <button onClick={() => setIsOpen(false)}>x</button>
      </div>
    </>
  );
};
