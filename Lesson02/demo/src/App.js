import React, { Component } from 'react'
import EventNoParameter from './components/EventNoParameter'
import EventParameter from './components/EventParameter'
import Logout from './components/Logout';
import Login from './components/Login';
import LoginControl from './components/LoginControl';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: 'Nguyen Van A',
      tuoi: 20,
      scourse: 'ReactJS',
      // user: {
      //   id: 1,
      //   name: 'Đàm Luận',
      //   age: 20,
      // },
      isLogin: false,
      number: [1, 2, 3, 4, 5]
    }
  }
  changeInfo = () => {
    this.setState({
      hoTen: 'Devmater',
      tuoi: 25
    }, () => {
      console.log("Họ và tên:", this.state.hoTen, "Tuổi: ", this.state.tuoi);
    })
    // console.log("Họ và tên:", this.state.hoTen, "Tuổi: ", this.state.tuoi);
  }
  eventLinkHander = (event) => {
    event.preventDefault();
    console.log('Event Stop Link');
  }

  handerChangeName = (e) => {
    console.log(e.target.type);
    this.setState({
      hoTen: e.target.value
    })
  }
  handerChangeScoure = (e) => {
    this.setState({
      scourse: e.target.value
    })
  }

  handerChange = (e) => {
    // const { name, value } = e.target;
    var name = e.target.name;
    var value = e.target.value;
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }
  handerChangeLogin = (isLogin) => {
    this.setState({
      isLogin: isLogin
    })
  }

  render() {
    const isLogin = this.state.isLogin;
    const listNumber = this.state.number.map((number) => {
      return <li key={number}>{number}</li>
    });
    return (
      <>

        <div>
          <h2>Login Control</h2>
          <LoginControl isLogin={this.state.isLogin} hvt={this.state.hoTen} />
          {
            isLogin ? <button onClick={() => this.handerChangeLogin(false)}>Logout</button> :
              <button onClick={() => this.handerChangeLogin(true)}>Login</button>
            // isLogin ? <Logout /> : <Login hvt={this.state.hoTen} />
          }
        </div>
        <div>
          <h2>List Number</h2>
          <ul>
            {listNumber}
          </ul>
        </div>
        <>
          <h2>Event No Parameter</h2>
          <EventNoParameter />
        </>
        <>
          <h2>Event Parameter</h2>
          <EventParameter />
        </>
        <div>
          <h2>From Control</h2>
          <input type='text' name="hoTen" placeholder='Nhập họ tên' value={this.state.hoTen} onChange={this.handerChangeName} />
          <select name="scourse" value={this.state.scourse} onChange={this.handerChangeScoure}>
            <option value="ReactJS">ReactJS</option>
            <option value="Angular">Angular</option>
            <option value="VueJS">VueJS</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="java">Java</option>
          </select>
          <p>Họ và tên: {this.state.hoTen}</p>
          <p>Khóa học: {this.state.scourse}</p>
        </div>
        <div>
          <h2>From Control 2</h2>
          <input type='text' name="hoTen" placeholder='Nhập họ tên' value={this.state.hoTen} onChange={this.handerChange} />
          <select name="scourse" value={this.state.scourse} onChange={this.handerChange}>
            <option value="ReactJS">ReactJS</option>
            <option value="Angular">Angular</option>
            <option value="VueJS">VueJS</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="java">Java</option>
          </select>
          <p>Họ và tên: {this.state.hoTen}</p>
          <p>Khóa học: {this.state.scourse}</p>
        </div>

        <div>
          <h2>State</h2>
          <p>Họ và tên: {this.state.hoTen}</p>
          <p>Tuổi: {this.state.tuoi}</p>
          <button onClick={this.changeInfo}>Change Info</button>
        </div>

        <h2>Event Link Hander</h2>
        <a href='https://devmaster.edu.vn/' onClick={this.eventLinkHander}>Click me</a>
      </>
    )
  }
}
