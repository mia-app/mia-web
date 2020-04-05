import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  if (inView1) controls1.start({ opacity: 1, y: 0 });
  if (inView2) controls2.start({ opacity: 1, y: 0 });

  return (
    <div className="home">
      <div className="home__landing">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="home__header">Hi,</h1>
          <h1 className="home__header">I'm Mia</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <p className="home__text1">
            I can help if you think you may be having symptoms of Corona and you
            need to tell the others around you.
          </p>

          <p className="home__text2">For now I am just a prototype</p>
          <p className="home__text2">~ Be easy on me! ~</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <span role="img" aria-label="Mia" className="home__mia">
            🙋‍♀️
          </span>
        </motion.div>
      </div>
      <motion.div
        className="home__buttons"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <Link to="/symptoms" className="button">
          I Have Symptoms
        </Link>
        <Link to="/prevention" className="button">
          Record Interactions
        </Link>
      </motion.div>
      <motion.section
        ref={ref1}
        className="home__section"
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <h2>If you have symptoms or have been diagnosed...</h2>
        <p>
          Sed pellentesque congue est, ut condimentum ipsum interdum sed. Nullam
          ullamcorper pharetra massa at sollicitudin. Proin sagittis lorem est,
          eu sagittis erat mattis commodo. Sed rhoncus risus vel magna hendrerit
          volutpat.
        </p>
      </motion.section>

      <motion.section
        className="home__section"
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <h2>If you want to proactively track your contacts...</h2>
        <p>
          Sed pellentesque congue est, ut condimentum ipsum interdum sed. Nullam
          ullamcorper pharetra massa at sollicitudin. Proin sagittis lorem est,
          eu sagittis erat mattis commodo. Sed rhoncus risus vel magna hendrerit
          volutpat.
        </p>
      </motion.section>
    </div>
  );
};
