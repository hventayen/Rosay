import Mission from "./Mission";
import About from "./About";
import Table from "./Table";
import Video from "./Video";

const Home = () => {
  return (
    <section className="home">
      <Video />
      <Mission />
      <Table />
      <About />
    </section>
  );
};

export default Home;