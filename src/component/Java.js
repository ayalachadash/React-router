import { React,useContext}  from "react";
import { UserContext } from '../context/User.context';
export const Java = () => {
    const { user } = useContext(UserContext);

    return <div>
    <h1>Welcome to the Java course!!</h1>
    <h2>{user.name}</h2>
    </div>
}