import Stat from "./Stat";

import { textLabels } from "../constants";

export default function Statistics({ stats }) {
  const {
    numberOfCharacters,
    numberOfWords,
    numberOfInstagramCharsLeft,
    numberOfFacebookCharsLeft,
  } = stats;

  return (
    <section className='stats'>
      <Stat text={textLabels.words} number={numberOfWords} />
      <Stat text={textLabels.characters} number={numberOfCharacters} />
      <Stat text={textLabels.instagram} number={numberOfInstagramCharsLeft} />
      <Stat text={textLabels.facebook} number={numberOfFacebookCharsLeft} />
    </section>
  );
}
