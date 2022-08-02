/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Layout from "./Layout";
import Header from "./Header";
import List from "./List";
import Body from "./Body";
import Write from "./write";
import { useSelector, } from "react-redux/es/exports";
import Weather from "./Weather";


function App() {
  let toggle = useSelector((state) => { return state.toggle } )

  return (

      <Layout>
        <Header />
        {toggle ? <Write /> : <List />}
        <Weather></Weather>
      </Layout>

  );
}
export default App;

