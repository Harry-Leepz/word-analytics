import Stat from "./Stat";

export default function Statistics({ stats }) {
  const {
    numberOfCharacters,
    numberOfWords,
    numberOfInstagramCharsLeft,
    numberOfFacebookCharsLeft,
  } = stats;

  return (
    <section className='stats'>
      <Stat text='Words' number={numberOfWords} />
      <Stat text='Characters' number={numberOfCharacters} />
      <Stat text='Instagram' number={numberOfInstagramCharsLeft} />
      <Stat text='Facebook' number={numberOfFacebookCharsLeft} />
    </section>
  );
}
