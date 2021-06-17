import React from 'react';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import TimelineIcon from '@material-ui/icons/TimelineOutlined';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';
import WorkIcon from '@material-ui/icons/Work';
const Sidebar = (props) => {
    return (
        <div className="sidebar">

            <HomeIcon className="sidebar-item" onClick={() => {

                if (props.contentRef.current) {
                    let e = props.contentRef.current.querySelector('.home-content-header');

                    props.contentRef.current.scrollTop = e.offsetTop - e.offsetHeight;
                }

            }} style={{ transition: "0.2s all linear" }} />
            <TimelineIcon className="sidebar-item" onClick={() => {
                if (props.contentRef.current) {
                    let e = props.contentRef.current.querySelector('.home-content-story');

                    props.contentRef.current.scrollTop = e.offsetTop - 150;
                }
            }} style={{ transition: "0.2s all linear" }} />
            <DescriptionIcon className="sidebar-item" onClick={() => {
                if (props.contentRef.current) {
                    let e = props.contentRef.current.querySelector('.home-content-portfolio');
                    props.contentRef.current.scrollTop = e.offsetTop - 150;
                }
            }} style={{ transition: "0.2s all linear" }} />
            <CheckCircleIcon
                onClick={() => {
                    if (props.contentRef.current) {
                        let e = props.contentRef.current.querySelector('.home-content-end');
                        props.contentRef.current.scrollTop = e.offsetTop - 150;
                    }
                }}
                className="sidebar-item" style={{ transition: "0.2s all linear" }} />

        </div >)


}
export const SidebarAbout = (props) => {
    return (
        <div className="sidebar" {...props}>

            <HomeIcon className="sidebar-item" onClick={() => {

                if (props.contentRef.current) {
                    let e = props.contentRef.current.querySelector('.about-header');
                    console.log(e.offsetHeight);
                    console.log(props.contentRef.current.scrollTop);
                    props.contentRef.current.scrollTop = e.offsetTop - e.offsetHeight - 200;
                }

            }} style={{ transition: "0.2s all linear" }} />

            <DescriptionIcon className="sidebar-item" onClick={() => {
                if (props.contentRef.current) {
                    let e = props.contentRef.current.querySelector('.about-resume-section-title');
                    props.contentRef.current.scrollTop = e.offsetTop - 150;
                }
            }} style={{ transition: "0.2s all linear" }} />
            <WorkIcon
                onClick={() => {
                    if (props.contentRef.current) {
                        let e = props.contentRef.current.querySelector('.about-portfolio');
                        props.contentRef.current.scrollTop = e.offsetTop - 200;
                    }
                }}
                className="sidebar-item" style={{ transition: "0.2s all linear" }} />

        </div >)


}
export const SidebarContact = (props) => {
    return (
        <div className="sidebar" {...props}>

            <HomeIcon className="sidebar-item" onClick={() => {

                if (props.contentRef.current) {
                    let e = props.contentRef.current.querySelector('.contact-header');
                    console.log(e.offsetHeight);
                    console.log(props.contentRef.current.scrollTop);
                    props.contentRef.current.scrollTop = e.offsetTop - e.offsetHeight - 200;
                }

            }} style={{ transition: "0.2s all linear" }} />


            <WorkIcon
                onClick={() => {
                    if (props.contentRef.current) {
                        let e = props.contentRef.current.querySelector('.contact-form-input');
                        props.contentRef.current.scrollTop = e.offsetTop - 200;
                    }
                }}
                className="sidebar-item" style={{ transition: "0.2s all linear" }} />

        </div >)


}


export default Sidebar;