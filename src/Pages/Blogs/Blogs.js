import React from "react";

const Blogs = () => {
  const code = `const fruits = [
    { name:"mango", price:10, description: "A mango is an edible stone fruit." },
    { name:"banana", price:5, description: "A banana is an elongated, edible fruit." }
    ];

    let findFruits = fruits.find(fruit => fruit.name === 'mango');

    console.log(findFruits);`;
  return (
    <div className="lg:mx-6 md:mx-6">
      {/* question 1 */}
      <div class=" collapse rounded border border-base-300 bg-base-100 my-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content">
          <ol className="list-decimal ml-6">
            <li>Keeping component state local where necessary.</li>
            <li>
              {" "}
              Memoizing React components to prevent unnecessary re-renders.
            </li>
            <li>
              Code-splitting in React using dynamic import() Windowing or list
              virtualization in React.
            </li>
            <li> Lazy loading images in React.</li>
          </ol>{" "}
        </div>
      </div>
      {/* question 2 */}
      <div class=" collapse rounded border border-base-300 bg-base-100 my-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?{" "}
        </div>
        <div class="collapse-content">
          <p className="capitalize">the four kinds of react state to manage</p>
          <ol className="list-decimal ml-6 capitalize">
            <li>Local state</li>
            <li>Golobal State </li>
            <li>server state</li>
            <li> url state</li>
          </ol>{" "}
        </div>
      </div>
      {/* question 3 */}
      <div class=" collapse rounded border border-base-300 bg-base-100 my-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work?{" "}
        </div>
        <div class="collapse-content">
          <p className="capitalize">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      {/* question 4 */}
      <div class=" collapse rounded border border-base-300 bg-base-100 my-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          You have an array of products. Each object has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </div>
        <div class="collapse-content">
          <p className="capitalize">{code}</p>
        </div>
      </div>
      {/* question 5 */}
      <div class=" collapse rounded border border-base-300 bg-base-100 my-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content">
          <p className="capitalize">
            Unit tests are typically automated tests written and run by software
            developers to ensure that a section of an application (known as the
            "unit") meets its design and behaves as intended. In procedural
            programming, a unit could be an entire module, but it is more
            commonly an individual function or procedure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
