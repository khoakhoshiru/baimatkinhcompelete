import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { name, image, price, description, quantity } = this.props.item; //phan ra
    return (
      <div style={{ border: "1px solid red", padding: 30 }}>
        <h2>Tên Sản phẩm: {name} </h2>
        <img alt="" src={image} />
        <h2>Giá: {price + "$"} </h2>
        <h2>Mô tả: {description} </h2>
        <h2>Số lượng : {quantity}</h2>
      </div>
    );
  }
}
