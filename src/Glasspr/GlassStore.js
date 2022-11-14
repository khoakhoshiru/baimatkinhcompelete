import React, { Component } from "react";

import GlassDetail from "./GlassDetail";
import GlassItem from "./GlassItem";
import stylesH from "./glassStore.css";
import imgM from "./glassesImage/model.jpg";

import img1 from "./glassesImage/v1.png";
import img2 from "./glassesImage/v2.png";
import img3 from "./glassesImage/v3.png";
import img4 from "./glassesImage/v4.png";
import img5 from "./glassesImage/v5.png";
import img6 from "./glassesImage/v6.png";
import img7 from "./glassesImage/v7.png";
import img8 from "./glassesImage/v9.png";

//end import
class GlassStore extends Component {
  GlassProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  //data
  //state
  state = {
    glassImage: imgM,
  };
  handleChangeGlass = img => {
    this.setState({
      glassImage: img,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ alignItems: "center", textAlign: "Center" }}>
          tryGlasses
        </h1>
        <div
          style={{
            alignItems: "center",
            textAlign: "Center",
            position: "relative",
          }}
        >
          <img alt="" src={imgM} width={200} />
          <img
            style={{
              position: "absolute",
              top: "20%",
              left: "43%",
            }}
            alt=""
            src={this.state.glassImage}
            width={200}
          />

          <h2>choice Glass</h2>
        </div>
        <div
          style={{
            border: "1px solid",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "20px",
            margin: "20px",
          }}
        >
          <button>
            <img
              alt=""
              width={100}
              src={img1}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img1);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img2}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img2);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img3}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img3);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img4}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img4);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img5}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img5);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img6}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img6);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img7}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img7);
              }}
            />
          </button>
          <button>
            <img
              alt=""
              width={100}
              src={img8}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.handleChangeGlass(img8);
              }}
            />
          </button>
        </div>
      </div>
    );
  }
}
export default GlassStore;
