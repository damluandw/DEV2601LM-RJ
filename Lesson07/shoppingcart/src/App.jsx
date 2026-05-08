import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import ListCart from "./components/ListCart";
import Alert from "./components/Alert";
// import "./App.css";

function App() {
  const [listProduct, setListProduct] = useState([
    {
      id: "SP001",
      name: "aplusautomation",
      price: 12,
      image: "/src/assets/images/aplusautomation.jpg",
      quatity: 10,
      status: true,
    },
    {
      id: "SP002",
      name: "aplus media",
      price: 10,
      image: "/src/assets/images/aplus-media.jpg",
      quatity: 0,
      status: true,
    },
    {
      id: "SP003",
      name: "robo fig combo",
      price: 9,
      image: "/src/assets/images/robo_fig_combo.jpg",
      quatity: 5,
      status: true,
    },
    {
      id: "SP004",
      name: "target leap frog",
      price: 15,
      image: "/src/assets/images/target-leap-frog.jpg",
      quatity: 6,
      status: true,
    },
  ]);
  //
  const [listCart, setListCart] = useState([]);
  const handlerBuy = (cart) => {
    // console.log("App Buy product: ", cart);
    //
    let list = listCart;
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa 
    // (nếu tồn tại thì trả về vị trí index của sản phẩm đó trong mảng, 
    // nếu chưa tồn tại thì trả về -1)
    let index = list.findIndex((item) => item.idProduct === cart.idProduct);
    // Nếu đã tồn tại, cập nhật số lượng mua
    if (index !== -1) {
      list[index].quantityBuy += cart.quantityBuy;
    }
    // Nếu chưa tồn tại, thêm sản phẩm vào giỏ hàng
    else {
      list.push(cart);
    }
    console.log("List Cart: ", list);
    // for(let i=0; i<list.length; i++) {
    //   if(list[i].id === cart.idProduct) {
    //     list[i].quatity += cart.quantityBuy;
    //   }else {
    //     list.push(cart);
    //   }
    // }

    // Cập nhật lại state của giỏ hàng
    setListCart(list);
  };
  return (
    <>
      <div className="container">
        {/* TITLE : START */}
        <Header />
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProduct listProduct={listProduct} onBuy={handlerBuy} />
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <ListCart />
            <Alert />
          </div>
          {/* CART : END */}
        </div>
      </div>
    </>
  );
}

export default App;
