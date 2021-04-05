import React, { Component } from "react";
import "./Footer.css";
import ItemFooter from "./Item";
import{Link} from "react-router-dom"
class Footer extends React.Component {
  render() {
    const itemFooter = [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yWR2rU5YkwSBxK53depHh38NfLkz7lBUAg&usqp=CAU",
        title: "SHOPS",
        content1: "Rau củ",
        content2: "Hải sản",
        content3: "Đặc sản",
        content4: "Hàng sấy khô",
        content5: "Lương thực",
      },
      {
        img: "https://img.icons8.com/pastel-glyph/2x/info--v1.png",
        title: "Information",
        content1: "About Us",
        content2: "Customize Service",
        content3: " New Collection",
        content4: "Best Sellers",
        content5: "Privacy Policy",
      },
      {
        img: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/users.png",
        title: "User Area",
        content1: "My car",
        content2: "My account",
        content3: "With list",
        content4: "Login",
        content5: "Check out",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxvQiWdsOUa44Wqu74qilGKi-T7uLtbFG8g&usqp=CAU",
        title: "Hướng dẫn-phục vụ",
        content1: "Getting Started",
        content2: "FAQs",
        content3: "Buying Guide",
        content4: "Order Return",
        content5: "Affiliate Program",
      },
      {
        img: "https://cdn2.iconfinder.com/data/icons/small-color-v13/512/address_city_info_map_pin_street_tourist-512.png",
        content1: "Khoa CNTT - HVNN Viet Nam",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz0JhYuZ3wOX0NHRD5GSu0NZFaEzU0UkEsA&usqp=CAU",
        content1: "ĐT: 0123456789",
      },
    ];
    return (
      <div>
        <div className="newsletters">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4">
                <div className="organic">
                  {" "}
                  <p>Organic </p>
                </div>
                <div className="out-newsletter">
                  <p> Out Newsletter</p>
                </div>
                <div className="miss-the-update">
                  {" "}
                  Don’t miss the any update{" "}
                </div>
              </div>
              <div className=" col-xl-8 col-8 col-lg-8 col-md-8 col-sm-8">
                <Input />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12">
            <div className="group-organic-instagrams">
              <p className="organic-instagrams">Organic </p>
              <p className="instagrams">Instagrams</p>
            </div>
          </div>
        </div>
        <div className="container">
          <ItemFooter itemFooter={itemFooter} />
        </div>

        <Trakemark />
      </div>
    );
  }
}
export default Footer;

class Input extends React.Component {
  shoot() {
    alert("Bạn phải đăng nhập tài khoản");
    
  }
  render() {
    return (
      <div>
        <form className="input-btn">
          <input
            placeholder="Ý kiến đóng góp..."
            className="text-add"
            type="text"
          ></input>
          <button onClick={this.shoot}>
            GỬI Ý KIẾN</button>
        </form>
      </div>
    );
  }
}
class Trakemark extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="title-footer">
                @2021 HVNNVN <br/>
                Tổng đài tư vấn và hỗ trợ khách hàng: 1900 0000
              </div>
            </div>
            <div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="bank">
                <img src="https://img.favpng.com/23/13/3/logo-payment-visa-mastercard-paypal-png-favpng-Ny6jxPjJke3h8zQjde5A5axE5_t.jpg" alt="" />
                <img src="https://vtcgame.vn/Content/images/icon_vcoin.png" alt="" />
                <img src="https://www.indovinabank.com.vn/themes/ivb/assets/icons/rgt-card.svg" alt="" />
                <img src="https://m.thebank.vn/uploads/2019/06/20/y-nghia-logo-ngan-hang-dong-a.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
