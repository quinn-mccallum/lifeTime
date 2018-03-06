import React from "react";
import { Link } from 'react-router-dom'
import moment from 'moment';

import { Button, Card, Row, Col } from 'antd';

let style = {
    video: {
        position: "absolute",
        left: '50%',
        transform: "translateX(-50%)"
    },
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100 %",
        height: "100 %"
    },
    card: {
        /*         padding: "50px",
                margin: "50px", */
        marginTop: "15px",
        height: "90vh",
        background: "linear-gradient(169deg, white 700px, blue 200px, blue)"
    }
}

class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            lifespan: moment().add(82, 'years').format("YYYY [years] MM [months] D [days] H [hours] m [minutes] s [seconds]"),
        }
    }

    render() {
        return (
            <div>
                <div style={style.card}>
                    <div style={{ padding: 50, margin: 50 }}>
                        <Row>
                            <h1 style={{ fontSize: "70px" }}>Life Time</h1>
                            <p style={{ fontSize: "18px" }}>A mapping of your life in hours.<br /> Discover how much free time you truly have and compare yourself with the national average.</p>
                            <Link to="/signup"><Button type="primary">Get Started</Button></Link>
                        </Row>
                    </div>
                </div>
                <div style={{ height: 500, backgroundColor: 'blue' }}>
                    <div style={style.video}>
                        <iframe style={style.iframe} width="560" height="315" src="https://www.youtube.com/embed/9mSpwYQMwvE?rel=0&amp;showinfo=0" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;