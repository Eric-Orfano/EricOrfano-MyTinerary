import Hero from "../components/Hero";
import { cities } from "../data/data";
import Carrousel from "../components/Carrousel";

const Home = () => {
  const citys = [cities.slice(0, 4), 
                 cities.slice(4, 8), 
                 cities.slice(8, 12)];

  return (
    <>
      <Hero />
      <main>
        <Carrousel citys={citys} />
      </main>
    </>
  );
};

export default Home;
