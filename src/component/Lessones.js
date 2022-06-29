import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Java } from './Java';
import { Node } from './Node';
import { Python } from './Python';
import { English } from './English';


const routes = [
    {
        route: 'java',
        name: 'Java',
        component: Java
    }, {
        route: 'node',
        name: 'Node',
        component: Node
    }, {
        route: 'python',
        name: 'Python',
        component: Python
    }, {
        route: 'english',
        name: 'English',
        component: English
    }
]

export const Lessones = () => {
    return (
        <div>
            <menu>
                <ul>
                    {routes.map(route => <li key={route.route}><Link to={route.route}>{route.name}</Link></li>)}
                </ul>
            </menu>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
