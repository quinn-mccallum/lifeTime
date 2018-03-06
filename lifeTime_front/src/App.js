import React, { Component } from 'react';
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import Info from "./components/Info";
import Data from "./components/Data";
import WrappedSignup from "./components/Signup";

import Chart from 'chart.js';

import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        name: "",
        email: "",
        age: 0,
        sex: "",
        chores: 0,
        care: 0,
        sleep: 0,
        work: 0,
        phone: 0,
        tv: 0
      },
      national: {
        15: {
          sleep: 9.6,
          care: 0.95,
          chores: 0.78,
          work: 4.1,
          phone: 3.17,
          tv: 2.76
        },
        20: {
          sleep: 9.24,
          care: 0.91,
          chores: 1.13,
          work: 5.05,
          phone: 2.92,
          tv: 2.54
        },
        25: {
          sleep: 8.66,
          care: 0.76,
          chores: 1.57,
          work: 5.19,
          phone: 2.33,
          tv: 2.19
        },
        35: {
          sleep: 8.40,
          care: 0.73,
          chores: 1.9,
          work: 5.17,
          phone: 2.08,
          tv: 2.10
        },
        45: {
          sleep: 8.40,
          care: 0.73,
          chores: 1.97,
          work: 4.89,
          phone: 2.08,
          tv: 2.43
        },
        55: {
          sleep: 8.51,
          care: 0.74,
          chores: 2.05,
          work: 3.72,
          phone: 1.97,
          tv: 2.95
        },
        65: {
          sleep: 8.66,
          care: 0.76,
          chores: 2.56,
          work: 1.33,
          phone: 1.97,
          tv: 3.67
        },
        75: {
          sleep: 9.16,
          care: 0.91,
          chores: 2.35,
          work: 0.35,
          phone: 1.97,
          tv: 4.03
        }
      }
    }
  }

  addProfile = (name, email, age, sex, chores, care, sleep, work, phone, tv) => {
    let newProfile = {
      name: name,
      email: email,
      age: age,
      sex: sex,
      chores: chores,
      care: care,
      sleep: sleep,
      work: work,
      phone: phone,
      tv: tv
    }
    axios.post("http://localhost:8080/signup", newProfile)
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    axios.get("http://localhost:8080/data")
      .then(result => {
        let profile = result.data.profile;
        this.setState({
          profile: profile
        })
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log(this.state.profile)
    return (
      <div className="App">

        {/* Logo */}
        <header>
          <Row align="middle" style={{paddingTop: "20px", paddingBottom: "20px"}}>
            <Link to="/">
            <Col span={1} offset={2}>
              <img src="/hourglass.svg" style={{ height: 50 }} />
            </Col>
            <Col span={2}>
              <h2 style={{ margin: 0 }}>Life Time</h2>
            </Col>
            <Col span={2} offset={16}>
              <Link to="/signup"><Button size="small">Sign Up</Button></Link>
            </Col>
          </Link>
          </Row>
        </header>

      <Switch>
        <Route exact path="/" component={Info} />
        <Route path="/signup" render={(props) => { return <WrappedSignup addProfile={this.addProfile} history={props.history} /> }} />
        <Route path="/data" render={() => { return <Data profile={this.state.profile} national={this.state.national} /> }} />
      </Switch>
      </div >
    )
  }
}

export default App;
