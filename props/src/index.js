import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function People() {
  const friends = [
    { name: "Vikas", job: "Developer", age: 25, company: "Google" },
    { name: "Prasanna", job: "Marketing", age: 25, company: "KPMG" },
    {
      name: "Amith",
      job: "Construction Manager",
      age: 24,
      company: "Atlassian",
    },
  ];

  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = (props) => {
  const { name, job, age, company } = props.person;
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{company}</p>
      <p>{age}</p>
      <hr />
    </article>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
