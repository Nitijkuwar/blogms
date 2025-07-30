import React, { useState } from "react";
import Title from "./Title";
import Display from "./Display";
import Button from "./Button";

const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(22);
  const incrementAge = () => {
    setAge(age + 5);
  };
  const incrementSalary = () => {
    setSalary(salary + 5);
  };
  return (
    <div>
      <Title />
      <Display text="áge" displayValue={age} />
      <Button content="Increase Age" handleClick={incrementAge} />
      <Display text="salary" displayValue={salary} />
      <Button content="Increase salary" handleClick={incrementSalary} />
    </div>
  );
};

export default Parent;
