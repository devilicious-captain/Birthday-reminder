import React from "react";
// import People from "./People";

function Link({ people, handleDelete }) {
  return (
    <>
      {people.map((persons) => {
        const { id, name, age, image } = persons;

        return (
          <article key={id} className="birthday">
            <img src={image} alt={name} />
            <div className="people">
              <h2>{name}</h2>
              <p>{age} years old</p>
            </div>
            <button className="Done" onClick={(id) => handleDelete(id)}>
              Done
            </button>
          </article>
        );
      })}
    </>
  );
}

export default Link;
