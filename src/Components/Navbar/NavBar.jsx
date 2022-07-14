import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import { MdOutlineLocalPharmacy } from "react-icons/md";
import {Link, NavLink} from "react-router-dom";


const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const Navbar = () => {

    const categories = [
        {name: "analgesicos", id:0, route: "/category/analgesicos"},
        {name: "antibioticos", id:1, route: "/category/antibioticos"},
        {name: "vitaminas", id:2, route: "/category/vitaminas"},
        {name: "recetario", id:3, route: "/category/recetario"},
        {name: "otros", id:4, route: "/category/otros"},

    ];

    return(
        <header style={styles.container}>

<div  style={styles.container}>

<div style={styles.container}>  <Link to="/"> <MdOutlineLocalPharmacy style={styles.logo} /></Link> <h3>FARMACIA CENTRO MEDICO </h3> </div>

        </div>

        <div style={styles.links}>
            <nav>
                {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
            </nav>
            <Link to="/cart"><CartWidget /></Link>
        </div>
    </header >
    )
}

const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c7e8f3',
        color: '#4F646F',
    },
    title: {
        fontSize: 25
    },
    links: {
        display: "flex"
    },
    link: {
        fontSize: 16,
        padding: 20
    },
    logo: {
        fontSize: 75
    }
};

export default Navbar 
