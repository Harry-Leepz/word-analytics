import Stat from "./Stat";
export default function Statistics() {
  return (
    <section className='stats'>
      <Stat text='Words' number={0} />
      <Stat text='Characters' number={0} />
      <Stat text='Instagram' number={280} />
      <Stat text='Facebook' number={2200} />
    </section>
  );
}
