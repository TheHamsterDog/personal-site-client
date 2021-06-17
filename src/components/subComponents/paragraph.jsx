import React from 'react';
const Paragraph = (props) => {
    const [current, setCurrent] = React.useState(false);
    const ref = React.useRef(null);
    if (ref.current && !current) {
        console.log(ref.current.offsetTop - 600)
        if (props.current >= (ref.current.offsetTop - 600)) {

            setCurrent(true);
        }
    }
    return (
        <div ref={ref} style={{ transition: '0.5s all linear' }} className={(current ? "paragraph-current" : "paragraph") + " text3-2"}>
            {props.children}
        </div>
    )
}
export default Paragraph;