import style from './Modal.module.scss'

export const Modal = ({ setIsOpen, content }) => {
  return (
    
      <div className={style.modalContainer} onClick={() => setIsOpen(false)}>
        <div>
          <h5>{content}</h5>
        </div>
        <button onClick={() => setIsOpen(false)}>x</button>
      </div>
    
  );
};
