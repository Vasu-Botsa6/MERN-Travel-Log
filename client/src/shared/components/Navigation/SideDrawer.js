import React from "react";
import './SideDrawer.css';

const SideDrawer = props =>{
    return(
        <aside className="side-drawer">
            {props.children}
        </aside>
    )
}