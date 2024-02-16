import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Accordion } from "../../components/Accordion/Accordion";
import { Slider } from "../../components/slider/slider";
import { Title } from "../../components/title/title";
import Tooltip from "../../components/tooltip";
import { Cookie } from "../../components/CookieBanner/Cookie";
import { Button } from "../../components/Buttons/Button";

export const Frontpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Title title="Team Write ✍🏼" alignment="center" />
      <Slider />
      <section>
        <button onClick={() => setIsOpen(true)}>
          <Title title={"Open modal"} alignment="center" />
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
      <Tooltip />
      <Cookie />
      <Button />
    </>
  );
};
