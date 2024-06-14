import "../styles/Home.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "remixicon/fonts/remixicon.css";

import jyce from "../assets/jyce.png";

function Home() {
  return (
    <div className="home section" id="home">
      <div className="home__container container grid">
        <motion.img
          src={jyce}
          className="home__img"
          alt="jyce-img"
          width="375"
          height="375"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <div className="home__data">
          <h1 className="home__name"> Jayashre</h1>
          <h3 className="home__profession">Socials</h3>
        </div>
        <Link
          to="#"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="home__scroll"
        >
          <div className="home__scroll-box">
            <i class="ri-arrow-down-line"></i>
          </div>

          <span className="home__scroll-text">Recent Works</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
