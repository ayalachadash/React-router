import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Lessones } from './component/Lessones';
import { Node } from './component/Node';
import { English } from './component/English';
import { Python } from './component/Python';
import { Java } from './component/Java';
import { English2 } from './component/English2';
import { About } from './component/About';
import { Connect } from './component/Connect';
import { UserContextProvider } from './context/User.context';
import { EnglishContextProvider } from './context/English.context';
import { ToTry } from './component/ToTry';

function App() {

  const routes = ['lessones', 'about', 'connect', 'toTry']
  return (
    <UserContextProvider>

      <div>
        <menu>
          <ul>
            <menu id='mainMenu'>
              <ul>
                {routes.map(route => <li key={route}><Link to={route}>{route}</Link></li>)}
              </ul>
            </menu>

          </ul>


        </menu>

        <Routes>
          <Route path="about" element={<About />} />
          <Route path="toTry" element={<ToTry />} />
          <Route path="connect" element={<Connect />} />
          <Route path="lessones" element={<Lessones />} >
            <Route path="java" element={<Java />} />
            <Route path={"node"} element={<Node />} />
            <Route path={"python"} element={<Python />} />
            <Route path="english" element={
              <EnglishContextProvider>
                <English />
              </EnglishContextProvider>}>
              <Route path=":englishLessonNum" element={<English2 />} />
            </Route>
          </Route>


        </Routes>

      </div>
    </UserContextProvider>
  );

}

export default App;
