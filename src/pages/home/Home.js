import React from "react";
import { Component } from "react";
import "./Style.css";
import ProductList from "../../components/productList";
import Footer from "../footer/footer";
import {CheckRole} from '../login/index';
class Home extends Component {
  render() {
  console.log(CheckRole());
    const checkUser = localStorage.getItem('keyUser');


    return (
      <div>
        <div className="banner-home">
          <div>
            <div className="text-banner">
              <img
                src="./assets/image/home/logo-white.png"
                alt=""
                className="logo-white"
              />
              <div className="title-banner">Khám phá thế giới hữu cơ</div>
              <p className="describe-text">
                Chúng tôi luôn mong muốn mang đến cho gia đình bạn những sản
                phẩm hữu cơ tốt cho sức khỏe. Chúng tôi luôn quan tâm đến nguồn
                thực phẩm bạn đang sử dụng mỗi ngày và đó là động lực để chúng
                tôi cải thiện các sản phẩm.
              </p>
              <div className="star-ex"> khám phá </div>
            </div>
          </div>
        </div>
        <div className="about-us container">
          <div className="row">
            {/* Hiển thị ảnh trên đầu trang  */}
            <div className="col-12 col-md-7 col-sm-12 col-lg-7">
              <div className="img-about-us">
                <div className="img-us">
                <img src="http://caosu.net.vn/Uploads/News/17052017/News/2051775228-nong%20nghiep%20cong%20nghe%20cao.jpg" />
                  <img src="https://lh3.googleusercontent.com/proxy/kqqYCGw-mTlA6A5aX24amLPC_gL4RzYziss1_w88s_h7Zmp4I0G7Hv3sdCOsIi0DI3sUsb0opGINYs_YO5LcHple89OlfRkx9hWhPyI" />
                 
                </div>
                {/* <div className="img-us-2">
                  <img src="./assets/image/home/about2.png" alt="" />
                  <div className="content-about-us-2"> Play Video</div>
                </div> */}
              </div>
            </div>
            <div className="col-12 col-md-5 col-sm-12 col-lg-5 content-abouts">
              <Infomation />
            </div>
          </div>
        </div>
        <div className="product-title">
          <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12 col-12 text-center organic-product">
              Organic
              <p className="text-center">Sản phẩm</p>
            </div>
          </div>
          <ProductList />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;

function Infomation() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12 text-center organic-about">
          Organic
        </div>
        <div className="col-md-5 col-sm-12 about-us-one">About us</div>
      </div>
      <hr />
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 content-about-one">
          Trang trại Arangi, là một trang trại hữu cơ nằm ở AAA, Việt Nam. Chúng
          tôi tin rằng tất cả mọi người có quyền có thực phẩm tươi ngon nhất!
          Chúng tôi cung cấp cho cộng đồng của chúng tôi sản phẩm hữu cơ, chất
          dinh dưỡng mỗi năm. Chúng tôi thực sự thích trồng thực phẩm cho bạn và
          những người thân yêu của bạn.
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 content-about-two">
          Chúng tôi đã được chứng nhận hữu cơ bởi Nông dân hữu cơ Vermont (VOF)
          kể từ mùa trồng trọt đầu tiên của chúng tôi vào năm 2006. Các cây
          trồng hữu cơ phải được trồng không sử dụng thuốc trừ sâu tổng hợp, gen
          di truyền sinh học (GMO), phân bón từ dầu mỏ và phân bón từ bùn thải.
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-12"
          content-about-three
          style={{ marginTop: "20px" }}
        >
          Vật nuôi hữu cơ được nuôi để lấy thịt, trứng và các sản phẩm từ sữa
          phải có ra ngoài trời và được cung cấp thức ăn hữu cơ. Họ có thể không
          được sử dụng thuốc kháng sinh, hormone tăng trưởng hoặc bất kỳ sản
          phẩm phụ nào của động vật.
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 img-about-us-end">
          <img src="./assets/image/home/about-us.png" width="50%" alt="" />
        </div>
      </div>
    </div>
  );
}
