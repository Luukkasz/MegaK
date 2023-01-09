import {NavLink} from "react-router-dom";
import React from "react";


export const Header = () => {
    const colorOfLink = ({ isActive }: {isActive: boolean}) => ({color: isActive ? 'green' : 'black'});

   return <>
        <h1>Santa App</h1>
        Menu: <NavLink style={colorOfLink} to={"/gift"}>Switch to gifts</NavLink> |
       <NavLink style={colorOfLink} to={"/child"}>Switch to children</NavLink>
        <hr/>
    </>
}

