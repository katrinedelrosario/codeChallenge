import { Title } from "../title/title";
import { useState } from "react";

export const Accordion = ({ content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordionContainer">
      <div className="accordionItem">
        <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
          <div>
            <Title title="Accordion" />
          </div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div>{content}</div>}
      </div>
    </div>
  );
};
