import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Title } from "../../components/title/title";

export const Frontpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>Frontpage</h1>
      <section>
        <button onClick={() => setIsOpen(true)}><Title title={'Open modal'}/></button>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            content="You spin me right 'round, baby, right 'round
            Like a record, baby, right 'round, 'round, 'round
            You spin me right 'round, baby, right 'round
            Like a record, baby, right 'round, 'round, 'round"
          />
        )}
      </section>
    </>
  );
};
