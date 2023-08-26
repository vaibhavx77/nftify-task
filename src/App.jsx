import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TokenAddress from "./pages/TokenAddress/TokenAddress"
import Axios from "axios";
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";






function App() {
  
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    Axios.get("https://api.dexscreener.io/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c").then(async (response) => {
      setData(response.data.pairs)
      setFilterData(response.data.pairs)
    })
  }, [])
  

  function searchFilter(event){
    const searchValue = event.target.value;

    if(searchValue == ""){
      setFilterData(null);
    }

    const filter = data?.filter((pair)=> pair.baseToken.name.toLowerCase().includes(searchValue.toLowerCase()) || pair.baseToken.symbol.toLowerCase().includes(searchValue.toLowerCase()) || pair.baseToken.address.includes(searchValue) || pair.quoteToken.address.includes(searchValue) || pair.pairAddress.includes(searchValue));
    setFilterData(filter);
  }


  return (
    <>
    <TokenAddress data = {filterData} filterData={searchFilter}/>
    </>
  )
}

export default App
