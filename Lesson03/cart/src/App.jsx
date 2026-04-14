import React, { Component } from 'react'
import CartHeaderComponent from './components/CartHeaderComponent'
import CartBodyComponent from './components/CartBodyComponent'
import CartInfoComponent from './components/CartInfoComponent'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [
      { id: 1, name: 'Nguyễn Văn A', age: 23, sex: "Nam", birth:"17/03/2006", prov:"HN",adress :"Hà Nội"  },
       { id: 2, name: 'Nguyễn Văn B', age: 24, sex: "Nam", birth:"17/04/2005", prov:"QN",adress :"Quảng Ninh"  },
       { id: 3, name: 'Nguyễn Văn C', age: 25, sex: "Nam", birth:"17/06/2004", prov:"DN",adress :"Đà Nẵng"  },
       { id: 4, name: 'Nguyễn Thị H', age: 23, sex: "Nu", birth:"17/03/2006", prov:"HN",adress :"Hà Nội"  },
      ],
      isToogle: false,
      itemCart : { id: '', name: '', age: 0, sex: 'Nam', birth:"", prov:"HN",adress :""  }
    }
  }
  handerIsToogle= (status)=>{
    console.log("status",status)
    this.setState(
      {
        isToogle : status
      }
    )
  }
  handerView = (item) =>{
    // console.log("item")
    // console.log(item)
    this.setState(
      {
        itemCart : item,
        isToogle : true
      }
    )
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <CartHeaderComponent  sendCart = {(item) => this.handerView(item)} 
            sendIsToogle ={(status) =>this.handerIsToogle(status)} />
            <CartBodyComponent carts={this.state.carts}
             sendCart = {(item) => this.handerView(item)}
            />
          </div>
        </div>
        {
          this.state.isToogle ? <CartInfoComponent 
          renderCart ={this.state.itemCart} 
          sendIsToogle ={(status) =>this.handerIsToogle(status)}/> :<></>
        }
       
      </div>
    )
  }
}
