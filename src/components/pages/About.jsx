import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className="about">

      <h2>About</h2>
      <p>
        The Maybelline Company was founded in Chicago by Thomas Lyle Williams in 1915. Williams noticed his older sister Mabel applying a mixture of Vaseline and coal dust to her eyelashes to give them a darker, fuller look. He adapted it with a chemistry set and produced a product sold locally called Lash-Brow-Ine.

        Williams renamed his eye beautifier Maybelline in her honor. In 1917, the company produced Maybelline Cake Mascara, "the first modern eye cosmetic for everyday use," and Ultra Lash, the first mass-market automatic, in the 1960s.

        In 1967, the company was sold by Williams to Plough Inc. (now Schering-Plough) in Memphis, Tennessee. The entire cosmetic production facility was moved from Chicago to Memphis over one weekend. In 1975, the company moved to Little Rock, Arkansas, where it is still located. In 1990, Schering-Plough sold Maybelline to a New York investment firm, Wasserstein Perella & Co. Maybelline’s headquarters remained in Memphis until its acquisition by L'Oréal in 1996. Its headquarters was then moved to New York City in 1996 and its factory to Brooklyn in 2000.
      </p>
      <Link to="/products" className="link">click me</Link>
    </section>
  );
};

export default About;
