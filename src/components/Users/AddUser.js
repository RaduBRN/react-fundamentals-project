import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameHandler = (event) => setEnteredUsername(event.target.value);
  const ageHandler = (event) => setEnteredAge(event.target.value);

  const onClick = () => {};

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageHandler} />
        <Button type="submit" handleClick={onClick}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
