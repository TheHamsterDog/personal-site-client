import React from 'react';
import { useLocation } from 'react-router-dom'
const changePathHandler = (e) => {
    document.location.href = e;
}
const Navbar = (props) => {

    let path = useLocation().pathname;
    path = path === "/" ? "Home" : path.slice(1, path.length);
    console.log(path);;
    console.log();
    return (
        <div className="navbar" style={{ boxShadow: `0 0 50px ${"rgba" + props.bs.slice(3, props.bs.length - 1) + ",0.9)"}` }}>
            <div className="navbar-logo text2-3" style={{textTransform:"capitalize"}} >
                {path}
            </div>

            <div className="navbar-list">
                <div onClick={changePathHandler.bind(this, '/')} style={{ transition: '0.2s all linear' }} className={path === "Home" ? "navbar-list-current text3-3" : "navbar-list-item text3-3"}  >
                    Home
                </div>
                <div onClick={changePathHandler.bind(this, '/about')} style={{ transition: '0.2s all linear' }} className={path === "about" ? "navbar-list-current text3-3" : "navbar-list-item text3-3"} >
                    About
                </div>
                <div onClick={changePathHandler.bind(this, '/contact')} style={{ transition: '0.2s all linear' }} className={path === "contact" ? "navbar-list-current text3-3" : "navbar-list-item text3-3"}  >
                    Contact
                </div>
            </div>
        </div>

    )

}
export default Navbar;