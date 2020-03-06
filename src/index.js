import React from 'react';
import ReactDom from 'react-dom';
import { argumentPlaceholder } from '@babel/types';
//import './index.css'




function People () {
const friends = [
    {name: "John Doe", job: "developer", age: "22", company: "apple"},
    {name: "Bob Doe", job: "designer", age: "24", company: "facebook"},
    {name: "Susy Doe", job: "artist", age: "25", company: "google"}
];

    return (
        <section>
           <Person  person={friends[0]} />
           <Person  person={friends[1]} />
           <Person  person={friends[2]} />
        </section>
    );
}
const Person = props => {
    const { name, job, age, company } = props.person;
return (
        <article>
            <h1>{name}</h1>
            <p>{job}</p>
            <p>{age}</p>
            <hr />
        </article>
    );
};

ReactDom.render(<People />,document.getElementById('root'));