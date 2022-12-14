import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="mb-2 grid  grid-cols-4 place-items-center  ">
      <div className="col-span-2">
        <img className=" aspect-square " src="/logomuz.png" />
      </div>
      <div className="col-span-2">
        <h1 className="mb-2 text-4xl font-bold ">About Us</h1>
        <p className="pr-12 mb-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore
          voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla
          ullam pariatur totam quos Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae
          quam eveniet! Minus labore voluptatibus corporis recusandae
          accusantium velit, nemo, nobis, nulla ullam pariatur totam quos Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga
          blanditiis, modi exercitationem quae quam eveniet! Minus labore
          voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla
          ullam pariatur totam quos
        </p>
        <p className="pr-12 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore
          voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla
          ullam pariatur totam quos Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae
          quam eveniet! Minus labore voluptatibus corporis recusandae
          accusantium velit, nemo, nobis, nulla ullam pariatur totam quos Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga
          blanditiis, modi exercitationem quae quam eveniet! Minus labore
          voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla
          ullam pariatur totam quos
        </p>
      </div>
    </div>
  );
}

export default About;
