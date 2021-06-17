import React from 'react';
import Navbar from './reusables/navbar';
import { SidebarContact as Scrollbar } from './reusables/scrollbar';
import SendIcon from '@material-ui/icons/Send';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Footer from './reusables/footer';
import Helmet from 'react-helmet'
const Contact = (props) => {
    let ref = React.useRef(null);
    const [state, setState] = React.useState({ name: "", email: "", message: "", subject: "", submitted: false });
    const onInputHandler = (name, e) => {


        const value = e.target.value;
        let change;
        switch (name) {
            case "name": change = { name: value }; break;
            case "email": change = { email: value }; break;
            case "subject": change = { subject: value }; break;
            case "message": change = { message: value }; break;
            default: return;
        }
        setState((state) => ({ ...state, ...change }))
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (state.name.length > 0 && state.message.length > 0 && state.subject.length > 0 && state.email.length > 0) {
            try {
                const request = await axios.post('/contact', state);
                console.log(request);
                toast.success("Message sent successfully!");
                setState(state => ({ ...state, submitted: true }));
            }
            catch (err) {

                console.log(err)
            }

        }
        else {
            let message = "";
            let errors = 0;
            if (state.name.length === 0) {
                message = "name";
                errors++;
            }
            if (state.subject.length === 0) {
                message = message.length > 0 ? message + ", subject" : "subject";
                errors++;
            }
            if (state.email.length === 0) {
                message = message.length > 0 ? message + ", email" : "email";
                errors++;
            }
            if (state.message.length === 0) {
                message = message.length > 0 ? message + ", message" : "message";
                errors++;
            }
            ;
            toast.error(`please make sure that the ${message
                } ${errors > 1 ? "fields are" : "field is"} not empty `);
        }


    }
    return (
        <div className="contact">
            <Helmet>
                <title>Shreshth Verma: Contact-me</title>
                <meta name="description" content="You can use this page to contact me" />
                <meta property="og:title" content="Shreshth Verma: Contact-me" />
                <meta property="og:description" content="You can use this page to contact me" />
            </Helmet>
            <Navbar bs={"rgb(21,19,17)"} />

            <Scrollbar contentRef={ref} style={{ paddingTop: "30vh" }} />
            <div ref={ref} className="contact-container">
                <Toaster containerStyle={{
                    bottom: "auto",
                    top: "20vh",
                    left: "auto",
                    right: "0%",
                    width: "70%"
                }} toastOptions={{
                    className: "text2-3 contact-notification", success: {
                        className: "text2-3 contact-notification contact-notification-success"
                    }, error: {
                        className: "text2-3 contact-notification contact-notification-error"
                    }
                }}
                />
                <div className="contact-header text2-3">
                    My contact information
                </div>
                <div className="contact-description text2-1">
                    My Email <a className="contact-description-button" href="mailto:shresth21oct@gmail.com">shresth21oct@gmail.com</a>
                </div>
                <div className="contact-form">
                    <div className="contact-form-header text1-3">
                        Alternatively(and preferably), you can use the contact form bellow to contact me.
                    </div>
                    <form className="contact-form-form" onSubmit={onSubmitHandler} autofill="off" autoComplete="off" >
                        <div className="contact-form-input" >
                            <input disabled={state.submitted} id="name" type="text" className="contact-form-input-input text3-2" placeholder=" " value={state.name} onChange={onInputHandler.bind(this, "name")} />
                            <label htmlFor="name" className="contact-form-input-label text2-2" >
                                Your  Name
                              </label>
                        </div>
                        <div className="contact-form-input" >
                            <input disabled={state.submitted} id="email" type="email" className="contact-form-input-input text3-2" placeholder=" " value={state.email} onChange={onInputHandler.bind(this, "email")} />
                            <label htmlFor="email" className="contact-form-input-label text2-2">
                                Your Email
                            </label>
                        </div>
                        <div className="contact-form-input" >
                            <input disabled={state.submitted} id="subject" type="text" className="contact-form-input-input text3-2" placeholder=" " value={state.subject} onChange={onInputHandler.bind(this, "subject")} />
                            <label htmlFor="subject" className="contact-form-input-label text2-2">
                                Subject
                            </label>

                        </div>
                        <div className="contact-form-input" >
                            <textarea id="message" type="text" disabled={state.submitted} className="contact-form-input-input text3-2" value={state.message}
                                onChange={(e) => {

                                    if (e.target.value === "") {

                                        e.target.style.height = "3rem";
                                    }
                                    else if (e.target.clientHeight < e.target.scrollHeight && e.target.clientHeight < 200) {
                                        e.target.style.height = "auto";
                                        e.target.style.height = e.target.scrollHeight + "px"
                                    }

                                    onInputHandler("message", e)
                                }}
                                placeholder=" " />
                            <label htmlFor="message" className="contact-form-input-label text2-2">
                                Message
                            </label>
                        </div>
                        <button className="contact-form-form-button text2-2">Send Message <SendIcon style={{ fontSize: "inherit", float: "right", marginTop: ".4rem", marginLeft: ".5rem" }} /></button>
                    </form>
                </div>
                <Footer />
            </div>
        </div>);

}

export default Contact;