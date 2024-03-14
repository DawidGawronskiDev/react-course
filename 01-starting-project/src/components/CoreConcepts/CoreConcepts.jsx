import { CORE_CONCEPTS } from "../../data-with-examples.js";
import "./CoreConcepts.css";

const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => {
          return <CoreConcept key={index} {...CORE_CONCEPTS[index]} />;
        })}
      </ul>
    </section>
  );
};

export default CoreConcepts;
