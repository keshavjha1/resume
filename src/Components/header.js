import React from 'react'
import {Link, Outlet} from "react-router-dom";
import styles from './header.css'
import style from './about.css'
import ParticlesBg from "particles-bg";
import {AppBar, Toolbar, IconButton, Typography, Button, Box} from "@mui/material";

const Header =()=>{
return(
    <div>
{/*        <AppBar position="static">
               <Toolbar>
                   <IconButton
                       size="large"
                       edge="start"
                       color="inherit"
                       aria-label="menu"
                       sx={{ mr: 2 }}
                   >
                   </IconButton>
                   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       News
                   </Typography>
                   <Button color="inherit">Login</Button>
               </Toolbar>
           </AppBar>*/}



        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
            </a>

            <ul id="nav" className="nav">
                <li >
                    <Link  to="/home">
                        Home
                    </Link>
                </li>

                <li>
                    <Link  to="/about">About </Link>
                </li>

                <li>
                    <Link to="/resume">
                        Resume
                    </Link>
                </li>

                <li>
                    <Link to="/portfolio">
                        Works
                    </Link>
                </li>
            </ul>
        </nav>
        <div id="divMain">
        <Outlet/>
        </div>
    </div>
);

}

export default Header