import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const inputName = useRef();
  const inputAge = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredAge = inputAge.current.value;
    const enteredUsername = inputName.current.value;
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a Valid Age (age > 0)",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.addUser(enteredUsername, enteredAge);
    inputName.current.value = '';
    inputAge.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClickOkay={errorHandler}
        ></ErrorModel>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input id="username" type="text" ref={inputName}></input>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={inputAge}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
