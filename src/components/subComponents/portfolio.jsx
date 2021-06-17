import React from 'react';
const Portfolio = (props) => {
    const [state, setState] = React.useState({
        hovering: false, flipImage: false, imageDimensions: {
            width: 0, height: 0
        }, visible: false
    });
    const ref = React.useRef(null);
    console.log(props);
    if (ref.current && !state.visible) {
        if (ref.current.offsetTop - 300 < props.current) {
            setState(state => ({ ...state, visible: true }))
        }
    }

    return (
        <div style={state.visible ? { transition: "1s all linear" } : { opacity: 0, transition: "0.2s all linear" }} ref={ref} className={state.visible ? "portfolio-item" : null}  >
            <div className={state.hovering ? "portfolio-item-current-image" : "portfolio-item-image"}>
                <img style={{ transition: "0.2s all linear", width: "100%" }} alt="portfolio" src={props.content.image} />
                <div className="portfolio-item-flip" style={{ transition: "0.2s all linear", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(51, 157, 104, 0.7)" }}>
                    <div onClick={() => {
                        window.open(props.content.link)
                    }} style={{ width: "100%", height: "100%", position: "relative", cursor: "pointer", color: "white" }}>


                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "2rem" }} className="text1-3">
                            Check it out
                    </div>
                    </div>
                </div>
            </div>
            <div style={{ transition: "0.2s all linear" }} className={state.hovering ? "portfolio-item-current-title text1-2" : "portfolio-item-title text1-2"}>
                {props.content.title}
            </div>
            <div style={{ transition: "0.2s all linear" }} className={state.hovering ? "portfolio-item-current-description text2-3" : "portfolio-item-description text2-3"}>
                {props.content.description}
            </div>
            <div style={{ transition: "0.2s all linear" }} className={state.hovering ? "portfolio-item-current-technologies" : "portfolio-item-technologies"}>
                {props.content.technologies.map(t => {
                    return (
                        <div style={{ transition: "0.2s all linear" }} className={state.hovering ? "portfolio-item-current-technologies-item" : "portfolio-item-technologies-item"}>
                            <img style={{ transition: "0.2s all linear" }} className={state.hovering ? "portfolio-item-current-technologies-item-image" : "portfolio-item-technologies-item-image"} src={t.image} alt={t.name} />
                            <div onClick={() => {
                                window.open(`https://www.google.com/search?q=${t.name}`);
                            }} style={{ transition: "0.2s all linear" }} className={state.hovering ? "portfolio-item-current-technologies-item-tail text3-1" : "portfolio-item-technologies-item-tail text3-1"}  >
                                {t.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default Portfolio;