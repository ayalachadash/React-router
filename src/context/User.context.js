import react from 'react';
import React, { useState, useEffect } from 'react';


export const UserContext = react.createContext({});

export const UserContextProvider = (props) => {

    const children = props.children;
    console.log(children);
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser({ name: 'aaaa', birthday: '10-11-2012' });
    }, []);
    const userOptions = {
        user,
        login() {
            setUser({ name: 'aaa', birthday: '10-11-2012' });
        },
        logout() {
            alert('logout');
            setUser({ name: '' })
        },
        update() { },
    }

    return <UserContext.Provider value={userOptions} >
        {children}
    </UserContext.Provider>
}