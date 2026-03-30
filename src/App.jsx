import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Main from './components/main/Main'
import NavBar from './components/navbar/NavBar'
import Stats from './components/stats/Stats'
import MainCard from './components/main/MainCard'
import Cart from './components/cart/Cart'
import Tabs from './components/Button Tab/Tabs'
import Steps from './components/steps section/Steps'

const getData = async () =>{
  const res = await fetch("./data.json");
  return res.json();
}

const dataPromise = getData();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar carts={carts} setCarts={setCarts} />

      <Banner />

      <Stats />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />

      { activeTab === "products" ? <Main dataPromise={dataPromise} carts={carts} setCarts={setCarts} /> : null }
      { activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts} /> : null }
      <Steps />
    </>
  )
}

export default App
