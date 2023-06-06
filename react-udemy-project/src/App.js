import { useState , Fragment} from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [userList,setUserList] = useState([]);

  const userHandler = (uName , uAge) => {
    setUserList((prevUserList) => {return ([...prevUserList,{name : uName , age : uAge , id : Math.random().toString()}])});
  }

  return (
    <Fragment>
     <AddUser  addUser = {userHandler} />
     <UserList users = {userList}/>
    </Fragment>
  );
}

export default App;
