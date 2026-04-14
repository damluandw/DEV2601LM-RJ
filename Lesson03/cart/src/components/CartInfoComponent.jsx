import React, { Component } from 'react'

export default class CartInfoComponent extends Component {
     changeIsToogle =()=>{
        this.props.sendIsToogle(false)
    };
    handerSubmit = (e)=> {
        e.preventDefault();
        console.log(e);
        // console.log(id);
    }

  render() {
    // const cart = this.props.renderCart
    // console.log("cart",cart);
    return (
       <><div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" 
                                name='id'
                                value={this.props.renderCart.id}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" 
                                name='name'
                                value={this.props.renderCart.name}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" 
                                name = 'age'
                                value={this.props.renderCart.age}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control"
                                name = 'sex'
                                 value={this.props.renderCart.sex}>
                                    <option value={'Nam'}>Nam</option>
                                    <option value={'Nu'}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input
                                    name  = "birth"
                                 value={this.props.renderCart.birth} className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select value={this.props.renderCart.prov}
                                name  = "prov" className="form-control">
                                    <option value={"HN"}>Hà Nội</option>
                                    <option value={"HCM"}>TP. Hồ Chí Minh</option>
                                    <option value={"DN"}>Đà Nẵng</option>
                                    <option value={"QN"}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" 
                                name = "adress"
                                value={this.props.renderCart.adress} defaultValue={""} />
                            </div>
                        </div>
                        <button onClick={(e)=> this.handerSubmit(e)} type="submit" className="btn btn-primary me-2">
                            Submit
                        </button>
                        <button  onClick={() =>this.changeIsToogle()}
                          className="btn btn-warning me-2">
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
  }
}
