import { React,useContext } from "react";
import { UserContext } from '../context/User.context';

export const Connect=()=>{
    const { user, logout,login } = useContext(UserContext);

    return <div>
        <h1>connect</h1>
    <h1>Settings of { user.name }  </h1>
    <button  onClick={() => logout()}>logout</button>
    <h3>{login}</h3>
</div>

}
