import Stat from "./Stat";
export default function Statistics({ numberOfCharacters, numberOfWords }) {
  return (
    <section className='stats'>
      <Stat text='Words' number={numberOfWords} />
      <Stat text='Characters' number={numberOfCharacters} />
      <Stat text='Instagram' number={280} />
      <Stat text='Facebook' number={2200} />
    </section>
  );
}
