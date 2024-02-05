import { Link } from 'react-router-dom';
import Links from "./Links";

// Please note:
// <Link to="/products/p1" ... could also be written as
// <Link to="p1" ... with React Router v6

const Gallery = () => {
  return (
    <section className="gallery">
      <Links />
      <ul>
        <li>
          <Link to='/gallery/p1'></Link>
        </li>
        <li>
          <Link to='/gallery/p2'></Link>
        </li>
        <li>
          <Link to='/gallery/p3'>Privacy Policy</Link>
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
