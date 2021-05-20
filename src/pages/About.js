import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About Us</h1>
      <p>
        This is a webb App made with <span className="about-span">ReactJS</span>{" "}
        and
        <span className="about-span"> TheCocktailDB API</span> to help you find
        your favourite cocktails and learn more about them like their
        ingredients and instructions
      </p>
    </section>
  );
};

export default About;
