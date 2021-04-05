import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../footer/footer";
import Support from "./support";
import Icon from "../../components/iconContact/icon";
import "./About.css";
class About extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Content />
        <WhyChooseUs />
        <Icon />
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-10">
              <div className="comma">
                <img src="./assets/image/about-us/phay.png" alt="" />
              </div>
              <p className="content1-introduce">
                Nông nghiệp hữu cơ có thể được định nghĩa là một hệ thống quản
                lý và sản xuất nông nghiệp kết hợp mức độ đa dạng sinh học cao
                với các thực hành môi trường bảo tồn tài nguyên thiên nhiên và
                có các tiêu chuẩn khắt khe về quyền lợi động vật. Hơn nữa, canh
                tác hữu cơ đáp ứng nhu cầu ngày càng tăng của người tiêu dùng
                đối với các sản phẩm tự nhiên và đồng thời cho phép bảo vệ môi
                trường trong bối cảnh phát triển nông thôn bền vững. Các doanh
                nghiệp sau đó sẽ được chứng nhận nếu họ đưa ra bằng chứng về
                việc tuân thủ các thông số kỹ thuật nghiêm ngặt khác nhau tùy
                thuộc vào loại hình sản xuất.
              </p>
              <p className="content-two-introduce">David Jones</p>
              <a
                className="content-three-introduce"
                href="http://vietnamorganic.vn/danh-sach-tin2/269/nong-nghiep-huu-co-nguyen-tac-co-ban.html#:~:text=N%C3%B4ng%20nghi%E1%BB%87p%20h%E1%BB%AFu%20c%C6%A1%20k%E1%BA%BFt,(%20Theo%20IFOAM%2D2005)."
              >
                Xem thêm
              </a>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="girl-end">
                <img src="./assets/image/about-us/girl.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function Contact() {
  return (
    <div>
      <Link to="/contact">
        <button className="content-3-suport"> Contact us </button>
      </Link>
    </div>
  );
}
export default About;

class Content extends Component {
  render() {
    return (
      <div className="container">
        <p className="wellcome-content">Welcome to OrganicWorld!</p>
        <p className="content2">
          Nông nghiệp hữu cơ và sức khỏe Một số nghiên cứu đã cố gắng ước tính
          ảnh hưởng sức khỏe của việc tiêu thụ các sản phẩm hữu cơ. Nói chung,
          hầu hết đều đi đến kết luận rằng nó có tác dụng tích cực.
        </p>
        <p className="content3">
          Trên thực tế, việc tiêu thụ các sản phẩm hữu cơ thường tương quan với
          lối sống lành mạnh hơn của những người theo chế độ ăn uống tốt hơn,
          luyện tập thể thao, quan tâm nhiều hơn đến sức khỏe hoặc có mức sống
          cao hơn.
        </p>
        <p className="content4">
          Các tiêu chuẩn này đảm bảo từ “hữu cơ” có ý nghĩa đồng nhất cho cả
          người tiêu dùng và nhà sản xuất trong EU. Các quy định liên quan tới
          nông sản hữu cơ được phát triển cùng với các quốc gia thành viên và sự
          hỗ trợ của hội đồng tư vấn và kĩ thuật và các tổ chức chuyên môn.
        </p>
      </div>
    );
  }
}
class WhyChooseUs extends Component {
  render() {
    const support = [
      {
        image:
          "https://bizweb.dktcdn.net/100/354/189/files/freeship-shop-dong-ho-chinh-hang.png?v=1557544614669",
        title: " miễn phí vận chuyển 24/7",
        describe: "Miễn phí ship với các thực phẩm hữu cơ",
      },
      {
        image: "https://camdohanoi.vn/wp-content/uploads/2019/05/icon-003.png",
        title: "  So sánh giá trị thực",
        describe: "Đảm bảo rẻ nhất và an toàn nhất",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRManBELzPOJU4mzd-6yLsEMdXLCj46RfJ5HQ&usqp=CAU",
        title: " Phục vụ tốt nhất",
        describe: "Dịch vụ chăm sóc khách hàng luôn sãn sàng và tận tình",
      },
    ];
    return (
      <div class="content-backgrounnd container">
        <div class="detail-content container">
          <div className="row">
            <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 why-choose">
              <p className="content1-suport">Tại sao chọn thực phẩm hữu cơ?</p>
              <hr />
              <p className="content2-suport">
                Một nghiên cứu về sự khác nhau giữa sản phẩm thông thường và sản
                phẩm hữu cơ đã chỉ ra rõ chất chống oxy hóa trong các sản phẩm
                hữu cơ nhiều hơn từ 1- 2 lần sản phẩm thông thường.
              </p>
              <Contact />
            </div>
            <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 ">
              <Support className="support-content" supports={support} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
