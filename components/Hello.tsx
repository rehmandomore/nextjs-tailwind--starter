import React from "react";

type Prop = {
  name?: string;
};

const Hello = ({ name }: Prop) => {
  return <h1 className="text-red-500">Hello Component</h1>;
};

export default Hello;
