import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Title } from "../../components/title/title";
import { Accordion } from "../../components/Accordion/Accordion";

export const Frontpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>Frontpage</h1>
      <section>
        <button onClick={() => setIsOpen(true)}>
          <Title title={"Open modal"} />
        </button>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            content="All I know is that to me.
            You look like you're havin' fun.
            Open up your lovin' arms.
            Watch out, here I come."
          />
        )}
      </section>
      <section>
        <Accordion
         
          content="You spin me right 'round, baby, right 'round.
Like a record, baby, right 'round, 'round, 'round.
You spin me right 'round, baby, right 'round.
Like a record, baby, right 'round, 'round, 'round."
        />
      </section>
    </>
  );
};
