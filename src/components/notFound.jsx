import React from 'react';
import Helmet from 'react-helmet'
const NotFound = (props) => {

    return (
        <div className="notfound">
            <Helmet>
                <title>404! Page not found</title>
                <meta name="description" content="404! Page not found" />
                <meta property="og:title" content="404! Page not found" />
                <meta property="og:description" content="404! Page not found"/>
            </Helmet>
            <div className="notfound-container">
                <div style={{ overflow: 'hidden', }}>
                    <div className="notfound-rage text1-1">
                        404!!!
            </div>
                    <div className="notfound-details text2-3">
                        You're lost, pal!
            </div></div>
                <div className="notfound-message text3-3">
                    It looks like the webpage that you landed on doesn't exist!
            </div>
                <div className="notfound-navigation">
                    <button className="notfound-navigation-button text3-2" onClick={() => {
                        document.location.href = "/";
                    }}>Home</button>
                    <button onClick={() => {
                        document.location.href = "/about";
                    }} className="notfound-navigation-button text3-2">About-me</button>
                    <button

                        onClick={() => {
                            document.location.href = "/contact";
                        }} className="notfound-navigation-button text3-2">Contact me</button>
                </div>
            </div>
        </div>);

}

export default NotFound;