import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
const footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://github.com/TheHamsterDog"><GitHubIcon className="footer-links-icon" /></a>
                <a className="footer-links-link text3-1" href="https://www.npmjs.com/~shreshth_verma">NPM</a>
                <a href="https://www.freelancer.com/u/shresth21oct"> <WorkIcon className="footer-links-icon" /></a>
            </div>
            <div className="footer-copyright ">
                <div className="footer-copyright-header text2-1"> © Shreshth Verma 2021 </div> <br />
                <div className="footer-copyright-credits text3-1">

                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: "0 0 2rem 0" }}>                    <div >Some images were taken from <a href="http://www.unsplash.com" className="footer-copyright-credits-link">unsplash</a>
                    </div>
                        <div >
                            Icons were sourced from <a href="https://material-ui.com/components/material-icons/" className="footer-copyright-credits-link"> Material-UI</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-specific text3-1">
                    <a className="footer-copyright-specific-link" href="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80">
                        About/Contact page part-background-image
                    </a>
                    <a className="footer-copyright-specific-link" href="https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1">
                        404 page part-background-image
                    </a>
                    <a className="footer-copyright-specific-link" href="https://images.unsplash.com/photo-1470347051932-8ca24b11b3e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80">
                        404 page header-color-image
                    </a>
                    <a className="footer-copyright-specific-link" href="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80">
                        404 page sub-header-color-image
                    </a>
                </div>
            </div>
        </div >)
}
export default footer