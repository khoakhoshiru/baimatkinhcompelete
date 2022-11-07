import React from "react";
import "./App.css";
import ProductList from "./Ex3/ProductList";
// import ProductList from "./components/ProductList";
// import StudentList from "./components/StudentList";
// import HomeEx2 from "./Ex2/Home";
// import DemoDataBinding from "./components/DemoDataBinding";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./Ex1/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <DemoDataBinding /> */}
        {/* <Home /> */}
        {/* <HomeEx2 /> */}
        {/* <ProductList /> */}
        {/* <StudentList /> */}
        <ProductList />
      </div>
    );
  }
}

export default App;
