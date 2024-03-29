import { Title } from "../title/title";
import { useState } from "react";
import style from './Accordion.module.scss'

export const Accordion = ({ content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={style.accordionContainer}>
      <div className={style.accordionItem}>
        <div className={style.accordionTitle} onClick={() => setIsActive(!isActive)}>
          
            <Title title="Accordion" />
          
          <div className={style.accordionBtn}>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={style.accordionContent} >{content}</div>}
      </div>
    </div>
  );
};
