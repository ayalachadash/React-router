import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { EnglishContext, EnglishContextProvider } from '../context/English.context';

export const English = () => {
    const {english}= useContext(EnglishContext);
    return <>
        <h1>Welcome to the English course!!</h1>
        <ul>
            {english.map(e => <li key={e.lessonNum}>  <Link to={`${e.lessonNum}`}> lesson num: {e.lessonNum} </Link> </li>)}
        </ul>
        <div>
            <h2>Selected Product</h2>
            <Outlet />
        </div>
    </>
}
