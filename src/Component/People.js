import React, { useState } from "react";
import Link from "./Link";
import data from "./Data";
import "./Birthday.css";
function People() {
  const [people, setPeople] = useState(data);
  const removepeople = (id) => {
    const peoplee = [...people];
    peoplee.splice(id, 1);
    setPeople(peoplee);
    console.log("line 10 People.js", peoplee);
  };
  return (
    <main>
      <section>
        <div className="container">
          <h1>Birthday Reminder</h1>
          <h3>{people.length} Birthday today</h3>
          <Link people={people} handleDelete={(id) => removepeople(id)} />
          <button onClick={() => setPeople([])}>Clear all </button>
        </div>
      </section>
    </main>
  );
}

export default People;
