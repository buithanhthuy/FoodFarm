// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");

const Account = require("./account.model");

// const auth = require('./auths.model');

const productsRoute = require("./products.route");
// const loginCtrl = require('./login.ctrl');
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://Buithanhthuy:1409Thuy@cluster0.dxcom.mongodb.net/backend?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      console.log("Kết nối thành công");
    },
    (err) => {
      console.log("Kết nối không thành công " + err);
    }
  );
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//form đăng kí
app.post("/register", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  // console.log(username, password)
  Account.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        res.status(400).json({message:"User này đã tồn tại!"});
      } else {
        return Account.create({
          username: username,
          password: password,
          role: "user",
        });
      }
    })
    .then((data) => {
      res.status(201).json({ message: "Tạo tài khoản thành công!" });
    })
    .catch((err) => {
      res.status(400).json("Tạo tài khoản thất bại!");
    });
});
//form đăng nhập
app.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  Account.findOne({ username: username })
    .then((data) => {
      if (!data) {
        res.status(400).json({
          message: "Tài khoản không tồn tại",
        });
      } else {
        if (data.password === password) {
          res.status(200).json({
            message: "Đăng nhập thành công",
            user: data,
          });
        } else {
          res.status(401).json({
            message: "Sai mật khẩu",
          });
        }
      }
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });

  //xác thực còn chưa có còn thiếu nhiều, sao không gộp chung vào tách ra hết vậy
  //Học lập trình hướng đối tượng rồi đúng k
  //Tách thế này thì bạn phải đặt nhiều server chạy ở các cổng khác nhau, kiểu này chắc bạn phả
  //đặt cả chục cái chứ k chỉ có 2,
  // giờ t test thử cho cái này
});
app.use("/products", productsRoute);

// app.post('/api/products', (req, res) => {
//     let products = [], id = null;
//     let cart = JSON.parse(req.body.cart);
//     if (!cart) return res.json(products)
//     for (var i = 0; i < products.length; i++) {
//       id = products[i].id.toString();
//       if (cart.hasOwnProperty(id)) {
//         products[i].qty = cart[id]
//         products.push(products[i]);
//       }
//     }
//     return res.json(products);
//   });

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
